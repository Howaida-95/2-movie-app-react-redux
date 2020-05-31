import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {saveState, loadState} from './store/localStorage/localStorage';
import homeReducer from './store/reducers/homeReducer';
import movieReducer from './store/reducers/movieReducer';
// combine reducers 
const rootReducer = combineReducers({
  home: homeReducer,
  mv: movieReducer
})
// redux dev tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store 
const store = createStore(rootReducer, loadState(), composeEnhancers(applyMiddleware(thunk))); // loadStorage
// save to localStorage 
store.subscribe(() => saveState(store.getState())) // this gonna save this into our localstorage 


// connect store to react 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
