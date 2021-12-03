import React ,{useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { isTokenValid,Logout} from '../Auth/AuthAction'




function NavBar() {
    const dispatch = useDispatch();

    
  const userDetailes = useSelector(state=> state.userDetailes )
  
  const Token  = useSelector(state=> state.Token )
  

 
  

  
   
    

    const clearToken=()=>{
        alert(Token);
        alert(userDetailes.email)
        console.log("userdetails are  " , {userDetailes});
        
        dispatch(Logout());
        console.log(Token); 
        console.log(userDetailes);
    }


    useEffect(()=>{

        // check if token is valid
       dispatch(isTokenValid(Token))
       console.log(userDetailes.email); 
    //    alert(Token)
       

    },[Token])



    return (
<div>

<div>
  <div className="container  ">
    <div className="row">
      <div className="col">
        <a className="navbar-brand mb-2 " href="index.html"><b>WWW.</b><span>ahmadBooks</span><b>.org</b></a>
      </div>
      <div className="col d-flex  justify-content-end mt-1 ">
        <div className="social-media ">
          <p className="mb-0 d-flex">
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram" /></a>
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble" /></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-md navbar-dark  bg-dark ">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
        <span className="fa fa-bars" /> Menu
      </button>
      <form action="#" className="searchform order-lg-last">
        <div className="form-group d-flex">
          <input type="text" className="form-control" placeholder="Search" /> {/* besta3mil l form control kermel l arc metel radius */}
          <button type="submit" placeholder className="form-control search"><span className="fa fa-search" /></button>
        </div>
      </form>
      <div className="collapse navbar-collapse" id="ftco-nav">
 
        <div className="d-flex">
                            {Token?
                            
                              <Link className="nav-link active" onClick={()=>{ clearToken(); }}  to="/login"> {userDetailes.email}  Logout</Link>
                              :
                            <>
                                <Link className="nav-link active"  to="/login">Login</Link>
                           
                                <Link className="nav-link active" to="/register">Register</Link>
                            </>
                        }
                            
                           
                        </div>
      </div>
    </div>
  </nav>
</div>












            

        </div>
    )
}

export default NavBar