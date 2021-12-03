import React , {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import { useSelector,useDispatch } from 'react-redux'

function DisplayBook () {
    const [ myData , setMyData]= useState([]);
    const [ myDataa , setMyDataa]= useState([]);
    const userDetailes = useSelector(state=> state.userDetailes )
  
    const Token  = useSelector(state=> state.Token )



    
    const back = async()=>{
        try {
            let resBooks = await axios.get('http://localhost:3003/Display'); 
    
            let AllBooks = resBooks.data;
          
            await axios.delete('http://localhost:3003/Display/'+AllBooks[0].id);
            window.opener = null;
            window.open('', '_self');
            window.close();
    
           
            
            

        } catch (error) {
            console.log(error);
        }
  }

     
  
 const Favorite =(data)=>{ 

  

    return async ()=>{
         
      if(Token){
        
    const config ={ headers:{ 'Content-Type':'application/json'}}
    
    let res = await axios.post('http://localhost:3003/Favorite',{Email: userDetailes.email , Category:data.Category , Title: data.TitleTitle , Author: data.Author , Price: data.Price , Image: data.Image}, config )
  alert("Favorite success")

    }
    else {  alert("You Have to login")}
}
}



    

    const getData = async()=>{
        try {
           
    let resBooks = await axios.get('http://localhost:3003/Display'); 
    let AllBooks = resBooks.data;    
   
    setMyData(AllBooks)
    
    
           
            
            

        } catch (error) {
            console.log(error);
        }
  }

    useEffect(()=>{
        getData();
       
        
    },[])
  
    return (
        <div className="container">
        
            { myData.map((myData,index) =>  
                            {
           
           
                            
                               
                           return ( (
                          


                             
                            <div className="row d-flex displayBlock">
                               
                          
                            <div className="col-4"><img id="displayImage" src={myData.Image} alt="xx"/> </div>
                            <div className="col-4 ">
                            <i onClick={back}  id={myData.id}   class="iconFont fa fa-window-close-o " aria-hidden="true"></i>
                              
                            
                             <div><h1 className="" >Title is:  {" "+myData.Title}</h1></div>
                                <div><h1 className="" >Author is : {" "+myData.Author}</h1></div>
                                 { myData.OldPrice? 
                                <h1 className="bookOldPrice">{myData.OldPrice}</h1> :""}<div> <h1  className=" ">Price is: {" "+myData.Price}</h1></div>
                              
                             <button > <i  onClick={Favorite(myData)} class="fa fa-heart-o iconFont" aria-hidden="true" >Add To favorite</i></button>
                           
                            </div>
                            
                            
   
   
                       </div>
                            
                               
                             
                           )
                            )
                        } 
                                         )}
        </div>
    );
}

export default DisplayBook;
