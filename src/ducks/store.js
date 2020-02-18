import {createStore, applyMiddleware} from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
import reducer from './listReducer'

export default createStore(reducer)