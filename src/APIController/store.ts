import React from 'react'
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'

const middleware = [thunk]

const initState  = {}

const preloadedState = () => {
    return createStore(
        rootReducer,
        initState,
        compose(
            applyMiddleware(...middleware)
        )
    )
}

export default preloadedState

