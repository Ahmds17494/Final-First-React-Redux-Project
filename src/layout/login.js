
import {useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin} from '../Auth/AuthAction'
import {useHistory } from 'react-router-dom'





function Applogin () {

    const history =useHistory();

      
   
  

  const isLoading = useSelector(state=> state.isLoading )
  
  const Page = useSelector(state=> state.page )
  const Admin = useSelector(state=> state.Admin )
  const userDetailes = useSelector(state=> state.userDetailes )
  


   
 
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');
  
  const [ loading , setLoading ] =useState(false);
  const [ErrorLogin , setErrorLogin ] = useState('');


  const inputChange =(e)=>{
      // clean error
      setErrorLogin('');
      switch (e.target.id) {
          case 'email':
              setEmail(e.target.value)
              break;
          case 'password':
              setPassword(e.target.value)
              break;
          default:
              break;
      }
  }

  const onSub = async (e)=>{
      e.preventDefault();
      
      // clean error
      setErrorLogin('');
      // show the spinner 
      setLoading(true);
      console.log({ email:email , password : password  });
      let data = { email:email , password: password}; 
      if ( email && password){
          // invok login function
          dispatch(UserLogin(data))
        
       

      }else{
          alert('All Fields Are Requiered')
      }
  }



  const dispatch = useDispatch();
 

     useEffect(() => {
 
        if (Page){
           
          
            history.push("/login/books")
       
        }
        if (Admin){
           
            history.push("/admin")
        }

    
         }, [Page,Admin])
    


  return ( <div className="App">
    { isLoading ? <div>loading......</div> : 

        
      <div className="container pt-5">

<div className="container">
  <div className="card bg-light">
    <article className="card-body mx-auto" style={{maxWidth: 400}}>
      <h4 className="card-title mt-3 text-center">LOG IN</h4>
      
      <p>
        <a href className="btn btn-block btn-twitter"> <i className="fa fa-twitter" /> &nbsp; Login via Twitter</a>
        <a href className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f" /> &nbsp; Login via facebook</a>
      </p>
      <p className="divider-text">
      </p>
      <form>
       {/* form-group// */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
          </div>
          <input name className="form-control" placeholder="Email address" type="email"   id="email" 
                    value={email} onChange={inputChange}/>
      
       
        </div> {/* form-group// */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
          </div>
          <input className="form-control" placeholder="Password" type="password"  id="password"
                    value={password} onChange={inputChange}  />
        </div> {/* form-group// */}                                      
        <div className="d-flex form-group">
          <button type="submit" className="btn btn-danger btn-block register" onClick ={onSub}> LOG IN</button>
        </div> {/* form-group// */}      
        <p className="text-center"> Do not have an account? <a href>Create an account</a> </p>                                                                 
      </form>
    </article>
  </div> 
</div>
   
          </div>
      
       }
 
          </div>)
        
}

export default Applogin

