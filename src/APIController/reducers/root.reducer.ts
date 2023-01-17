import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import serverReducer from './server.reducer'
import cartReducer from './cart.reducer'
import uiReducer from './ui.reducer'
const reducers = combineReducers({
    player:playerReducer,
    server:serverReducer,
    cart:cartReducer,
    ui:uiReducer
})

export default reducers

export type State = ReturnType<typeof reducers>