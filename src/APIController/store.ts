import React from 'react'
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const middleware = [thunk]

const initState  = {}

const preloadedState = () => {
    return createStore(
        rootReducer,
        initState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
}

export default preloadedState

