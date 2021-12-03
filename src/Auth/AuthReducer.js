import { LOGIN_FAILED , LOGIN_SUCCESS ,  LOGIN_REQUEST } from "./type";




const initialState ={
   
        isLoading:false,
        Error:null,
       
        Token : localStorage.getItem('token'),
        userDetailes: {},
        success:false,
        
        
       
}
   


    export const LogReducer =(state=initialState , action )=>{
        

    switch (action.type) {
        case 'REGISTER_REQUEST':
            return { ...state , isLoading:true }
            


        case 'REGISTER_SUCCESS':
            return { ...state ,
                    success:action.success ,
                    isLoading:false  }
           


        case 'REGISTER_FAILED':
            return { ...state , 
                    Error:action.payload , 
                    success : action.success ,
                    isLoading:false }


        // login action 
        case 'LOGIN_REQUEST':
            return { ...state , isLoading:true }
           


        case 'LOGIN_SUCCESS':
           
            return { ...state ,
                    success:action.success ,
                    isLoading:false,
                  
                    userDetailes:action.payload,
                    Token:action.payload.token
                   
                 
                  }
         
        case 'ADMIN_SUCCESS':
           
            return { ...state ,
            success:action.success ,
            isLoading:false,
            admin:true,
            userDetailes:action.payload,
            Token:action.payload.token
                           
                         
            }          

        case 'LOGIN_FAILED':
       return { ...state , 
               Error:action.payload , 
               success : false ,
               isLoading:false,
               userDetailes:{},
               Token:null,
              
           }

      
                           
  
         


      
                
        // is tokenValid Action 
        case 'TOKEN_VALID_REQUEST':
            return { ...state ,    }
            break;


        case 'LOGIN_TOKEN_VALID_SUCCESS':
            return { ...state ,
                    success:true ,
                    isLoading:false,
                    userDetailes:action.payload,
                   
                    page:true,
                    
                    
                    
                }
            break;

            case 'ADMIN_TOKEN_VALID_SUCCESS':
                return { ...state ,
                        success:true ,
                        isLoading:false,
                        userDetailes:action.payload,
                       
                        Admin:true,
                        
                        
                        
                    }
                break;
    


        case 'TOKEN_VALID_FAILED':
            return { ...state , 
                    Error:action.payload , 
                    success : false ,
                    isLoading:false,
                    Token:null,
                    userDetailes:{},
                    admin:false,
                    Page:false,
                    
                }

        case 'LOGOUT_SUCCESS':
            return { ...state , 
                    Error:null , 
                    success : true ,
                    isLoading:false,
                    Token:null,
                    userDetailes:{}
                }

                case 'Edit_SUCCESS':
                    return { ...state , 
                           edit: action.payload
                           
                        }
                        
        
        
                default:
                    //If the reducer doesn't care about this action type, return the existing state unchanged
                          return state
           

    }

    


}

export default LogReducer;


