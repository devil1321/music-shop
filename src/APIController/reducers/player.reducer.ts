import { PlayerTypes } from "../types"
import { Action } from "../action-types/player.action-types";
import { CartItem } from "../interfaces";

interface InitDataProps{
    isPlay:boolean;
    src:string;
    current:CartItem;
    activeIndex:number;
}

const initData:InitDataProps = {
    isPlay:false,
    src:'',
    current:{
        image:'',
        id:0,
        title:'',
        genres:[],
        tags:[],
        price_id:'',
        price:0,
        quantity:1,
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