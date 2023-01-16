import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import serverReducer from './server.reducer'
import cartReducer from './cart.reducer'
const reducers = combineReducers({
    player:playerReducer,
    server:serverReducer,
    cart:cartReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>