import { PlayerTypes } from "../types"
import { Action } from "../action-types/player.action-types";
import { Current } from "../interfaces";

interface InitDataProps{
    isPlay:boolean;
    src:string;
    current:Current;
    activeIndex:number;
}

const initData:InitDataProps = {
    isPlay:false,
    src:'',
    current:{
        title:'',
        genres:[],
        tags:[]
    },
    activeIndex:0
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case PlayerTypes.SET_IS_PLAY:
            return {
                ...state,
                isPlay:action.isPlay
            }
        case PlayerTypes.SET_SRC:
            return{
                ...state,
                src:action.src
            }
        case PlayerTypes.SET_CURRENT:
            return{
                ...state,
                current:action.current
            }
        
  
        
        default:
            return {
                ...state
            }
    }
}