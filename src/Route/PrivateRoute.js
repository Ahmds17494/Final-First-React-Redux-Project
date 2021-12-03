import React ,{ useContext ,useEffect} from 'react'
import { Route , Redirect } from 'react-router-dom'
import AuthStore  from '../Auth/store'
import { useSelector} from 'react-redux'

export default function PrivateRoute( { component:Component , ...rest }) {
    const Token  = useSelector(state=> state.Token )
      
  const Page = useSelector(state=> state.page )
  const Admin = useSelector(state=> state.Admin )
 
  

    return (
        <Route {...rest} render={props=>
        ((Token && Page) ? <Component {...props} /> : (Token && Admin) ? <Component {...props} />: <Redirect to='/login' />  )
        } />
    )
}
