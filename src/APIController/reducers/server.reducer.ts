import { ServerTypes } from "../types"
import { Action } from "../action-types/server.actions-types";

interface InitDataProps{
    file:any;
    tracks:any[]
    user:any;
    person:any;
    msg:string;
    tokens:{
        access:string;
        refresh:string;
    }
}

const initData:InitDataProps = {
    file:undefined,
    tracks:[],
    user:null,
    person:null,
    msg:'',
    tokens:{
        access:'',
        refresh:'',
    }
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case ServerTypes.INIT_USER:
                return {
                    ...state,
                    user:action.user,
                    msg:action.msg
                }
        case ServerTypes.INIT_PERSON:
                return {
                    ...state,
                    person:action.person,
                    msg:action.msg
                }
        case ServerTypes.SIGN_UP:
                return {
                    ...state,
                    user:action.user,
                    msg:action.msg
                }
        case ServerTypes.LOGIN:
            return {
                ...state,
                user:action.user,
                msg:action.msg,
                tokens:action.tokens
            }
        case ServerTypes.LOGOUT:
            return {
                ...state,
                user:action.user,
                tokens:{
                    access:'',
                    refresh:''
                }
            }
     
        case ServerTypes.FETCH_TRACK_LIST:
            return {
                ...state,
                tracks:action.tracks
            }
        case ServerTypes.FETCH_TRACK:
            return {
                ...state,
                file:action.file
            }
        case ServerTypes.HANDLE_UPDATE_OR_ADD_TRACK:
            return {
                ...state,
                msg:action.msg
            }
        case ServerTypes.HANDLE_REMOVE_TRACK:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}