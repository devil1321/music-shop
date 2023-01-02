import { combineReducers } from 'redux'
import playerReducer from './player.reducer'

const reducers = combineReducers({
    player:playerReducer
})

export default reducers

export type State = ReturnType<typeof reducers>