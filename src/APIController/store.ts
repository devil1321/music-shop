import React from 'react'
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'


const middleware = [thunk]

const initState  = {}


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = () => {
    return createStore(
        rootReducer,
        initState,
        composeEnhancers(
            applyMiddleware(...middleware),
        )
    )
}

export default preloadedState

