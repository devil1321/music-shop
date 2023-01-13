import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import serverReducer from './server.reducer'
const reducers = combineReducers({
    player:playerReducer,
    server:serverReducer
})

export default reducers

export type State = ReturnType<typeof reducers>