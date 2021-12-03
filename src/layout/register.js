
import React from 'react'
import {useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegister} from '../Auth/AuthAction'




function AppRegister () {

  

  const isLoading = useSelector(state=> state.isLoading)


   
 
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
          dispatch(UserRegister(data))
         
      }else{
          alert('All Fields Are Requiered')
      }
  }

 



  const dispatch = useDispatch();
  useEffect(() => {
    
   
     }, [])



  return ( <div className="App">
    {isLoading ?
       'LOADING.... ':
        
    <div className="container">
  <div className="card bg-light">
    <article className="card-body mx-auto" style={{maxWidth: 400}}>
      <h4 className="card-title mt-3 text-center">Create Account</h4>
      <p className="text-center">Get started with your free account</p>
      <p>
        <a href className="btn btn-block btn-twitter"> <i className="fa fa-twitter" /> &nbsp; Login via Twitter</a>
        <a href className="btn btn-block btn-facebook"> <i className="fa fa-facebook-f" /> &nbsp; Login via facebook</a>
      </p>
      <p className="divider-text">
        <span className="bg-light">OR</span>
      </p>
      <form>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user" /> </span>
          </div>
          <input name className="form-control" placeholder="Full name" type="text"  />
        </div> {/* form-group// */}
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
          <button type="submit" className="btn btn-danger btn-block register" onClick ={onSub}> Create Account</button>
        </div> {/* form-group// */}      
        <p className="text-center">Have an account? <a href>Log In</a> </p>                                                                 
      </form>
    </article>
  </div> 
</div>

      
       }
 
          </div>)
        
}

export default AppRegister

