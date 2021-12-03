import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from '../src/Auth/store'
import { BrowserRouter } from 'react-router-dom'
// import { createBrowserHistory } from 'history';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    
    <Provider store = {Store} >
    <App />
    
    </Provider>
    
  </React.StrictMode>
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export const browserHistory = createBrowserHistory({forceRefresh:true});

