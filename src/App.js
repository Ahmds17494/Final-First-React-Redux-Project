import logo from './logo.svg';
import './App.css';
import react,{ useEffect , useState  } from 'react'
import {Switch , Route } from 'react-router-dom'


import Login from './layout/login'
import Register from './layout/register'
import Books from './layout/books'
import NavBar from './layout/NavBar'
import PrivateRoute from './Route/PrivateRoute';
import MyBooks from './layout/myBooks';
import admin from './admin/admin';
import editWindow from './layout/editWindow';
import DisplayBook from './layout/displayBook';
import Footer from './layout/footer';



function App() {



  return (
    <div className="App">


    
  <NavBar/>

   <Switch>
   <Route path='/' exact component={MyBooks} /> 
    
    <Route path='/login' exact component={Login} />
    <Route path='/edit' exact component={editWindow} />
    <Route path='/display' exact component={DisplayBook} />
    <Route path='/register' exact component={Register} />
    <PrivateRoute exact path='/login/books' component={Books} /> 
    <PrivateRoute exact path='/admin' component={admin} /> 
    </Switch>
    <Footer/>
    </div>
  );
}

export default (App);
