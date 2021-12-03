// import{createStore} from 'redux'
// import Reducer from './AuthReducer'


// const store = createStore(Reducer)
// export default store


import{createStore , combineReducers, applyMiddleware} from 'redux'
import LogReducer from './AuthReducer'

import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';


const Logger =createLogger();

const AuthStore = createStore(LogReducer, applyMiddleware(Logger, thunk))

export default AuthStore