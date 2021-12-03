import { LOGIN_FAILED , LOGIN_SUCCESS , LOGIN_REQUEST } from './type'

import axios from 'axios'
import { useState} from 'react'
import Login from '../layout/login'
import { v4 as uuidv4 } from 'uuid'


import { Redirect } from "react-router-dom";
// import { browserHistory } from '../index';




// Define an initial state value for the app

//register function


const initialState ={
    isLoading:false,
    Error:null,
    userDetailes:{},
    Token : localStorage.getItem('token'),
    success:false,


}

   
  
export const AddBooks =(UserData)=>{ 
   
    
    
  
    
    return async (dispatch)=>{
       
    try {
        // trigger the request action 
        dispatch({ type:'ADD_REQUEST'  })

        const config ={ headers:{ 'Content-Type':'application/json'}}
        const Category= UserData.Category
       

        let res = await axios.post('http://localhost:3003/books',UserData, config )
        
        // trigger the success action 
        dispatch({ type:'ADD_SUCCESS'  })
        
        // browserHistory.push('/login')
        // redirect user to login page 
        

    } catch (error) {
         // trigger the Failed action 
         dispatch({ type:'ADD_FAILED' ,  payload:error.message   })
         
    }
} }

export const AddCategory =(UserData)=>{ 
   
    
    
  
    
    return async (dispatch)=>{
       
    try {
        // trigger the request action 
        dispatch({ type:'ADD_REQUEST'  })

        const config ={ headers:{ 'Content-Type':'application/json'}}
       
       

        let res = await axios.post('http://localhost:3003/category',UserData, config )
        
        // trigger the success action 
        dispatch({ type:'ADD_SUCCESS'  })
        
        // browserHistory.push('/login')
        // redirect user to login page 
        

    } catch (error) {
         // trigger the Failed action 
         dispatch({ type:'ADD_FAILED' ,  payload:error.message   })
         
    }
} }


//  export const addDescription =(data)=>{ 

  

//     return async (dispatch)=>{

//         try{ 

//         dispatch({ type:'Edit_SUCCESS' , payload:data })
//         alert(data)
        
//         window.open("http://localhost:3000/editWindow", "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")

  
 
    
// }
// catch (error) {
//     // trigger the Failed action 
//     return({ type:'Edit_FAILED' ,  payload:"error.message"   })
// }

// }
// }
   










export const UserRegister =(UserData)=>{ 
   
    
    
  
    
    return async (dispatch)=>{
       
    try {
        // trigger the request action 
        dispatch({ type:'REGISTER_REQUEST'  })

        const config ={ headers:{ 'Content-Type':'application/json'}}
       

        let res = await axios.post('http://localhost:3004/users',UserData, config )
        
        // trigger the success action 
        dispatch({ type:'REGISTER_SUCCESS' , success:true   })
        
        // browserHistory.push('/login')
        // redirect user to login page 
        

    } catch (error) {
         // trigger the Failed action 
         dispatch({ type:'REGISTER_FAILED' , success:false, payload:error.message   })
         
    }
} }



const SaveToken = async (user)=>{
    try {
        const config ={ headers:{ 'Content-Type':'application/json'}}

        let res = await axios.put('http://localhost:3004/users/'+user.id ,user, config )
        return { success:true}

    } catch (error) {
        alert("savetoken failed")
            return { success:false, error:error.message}
    }
}



export const UserLogin =(UserData)=>{ 


       



    return async (dispatch)=>{
    try {

        // trigger the request action 
        dispatch({ type:'LOGIN_REQUEST'  })

        // get all users and check if the data is exists in  the users         
        let res = await axios.get('http://localhost:3004/users')
        
        let Allusers = res.data;
        console.log('emailData : ' , UserData.email);
        console.log('Allusers : ' , Allusers  )
        
       
        let AuthUser  = Allusers.filter(user=> user.email === UserData.email &&  user.password === UserData.password && UserData.password !== "admin" && UserData.email !== "admin" )[0]
        console.log('AuthUser : ' , Allusers);
        
        
        // check if user is Authenticated 
        if( AuthUser ){

             // generate token 
             let token = uuidv4();
    
             // save token in backend (update the user with PUT request )
             AuthUser.token = token;
             let res_savetoken = await SaveToken(AuthUser);
             
             if ( res_savetoken.success ){
                 // set token in the localStorage 
                 localStorage.setItem('token',token)

            
           
                dispatch({ type:'LOGIN_SUCCESS' , payload:AuthUser  })
              
               
            }
              
           
            }
            
             if(UserData.email =="admin" && UserData.password == "admin"){
              
        let AdminData  = Allusers.filter(user=> user.email === UserData.email &&  user.password === UserData.password )[0]
       

             // generate token 
             let token = uuidv4();
    
             // save token in backend (update the user with PUT request )
             AdminData.token = token;
             let res_savetoken = await SaveToken(AdminData);
             
             if ( res_savetoken.success ){
                 // set token in the localStorage 
                 localStorage.setItem('token',token)
           
                dispatch({ type:'ADMIN_SUCCESS' , payload:AdminData  })
                alert("admin success")

                
            }
       
            }  
            
            // if(! AuthUser && !(UserData.email =="admin" && UserData.password == "admin") ){
            //     // if the token did not save in backend give error 
            //     dispatch({ type:LOGIN_FAILED, payload:"Token did not save"   })
                
            // }
            
        } 
        

              catch (error) {
                  alert("Login Failed")
                 dispatch({ type:'LOGIN_FAILED' , payload:error.message  })
        
    }
}
}

 // is token valid function 
 export const isTokenValid = (token)=>{
    return async (dispatch)=>{
    try {
        // trigger the request action 
        
        dispatch({ type:'TOKEN_VALID_REQUEST'  })

        // get all users and check if the token is exists in  one of the users         
        let res = await axios.get('http://localhost:3004/users')
        let Allusers = res.data;
        let AuthUser  = Allusers.filter(user=> token === user.token  )[0]
        console.log('Auth user : ' , AuthUser );
        if (AuthUser && AuthUser.id){

            if(AuthUser.email == "admin"){dispatch({ type:'ADMIN_TOKEN_VALID_SUCCESS' , payload:AuthUser  })}
            else { dispatch({ type:'LOGIN_TOKEN_VALID_SUCCESS' , payload:AuthUser  })}
        
        }
     
        // if (AuthUser && AuthUser.id && AuthUser.email !=="admin"){
        //     // trigger is Token Valid success action in reducer 
          
        //     dispatch({ type:'LOGIN_TOKEN_VALID_SUCCESS' , payload:AuthUser  })
        // }
        // if (AuthUser  && AuthUser.id &&  AuthUser.email=="admin"){
        //     // trigger is Token Valid success action in reducer 
          
        //     dispatch({ type:'ADMIN_TOKEN_VALID_SUCCESS' , payload:AuthUser  })
        // }
        
        else{
           
            dispatch({ type:'TOKEN_VALID_FAILED'   })
        }
    } catch (error) {
    
        dispatch({ type:'TOKEN_VALID_FAILED' , payload:error.message  })
    }
}}

export const Logout = ()=>{
    return async (dispatch)=>{
    localStorage.removeItem('token')
    dispatch({type:'LOGOUT_SUCCESS'})
}}


export default (UserLogin , UserRegister, isTokenValid, Logout, AddBooks, AddCategory );
