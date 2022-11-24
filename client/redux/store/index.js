import {createStore,combineReducers, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk" 
import reducer from '../reducer'


const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const rootReducer = combineReducers({
    products:reducer
})
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))