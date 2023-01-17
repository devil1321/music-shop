import { UITypes } from "../types"
import { Action } from "../action-types/cart.action-types";
import { CartItem } from "../interfaces";

interface InitDataProps{
  isOpen:boolean
}

const initData:InitDataProps = {
    isOpen:true
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case UITypes.HANDLE_SIDEBAR:
            return {
                ...state,
                isOpen:action.isOpen
            }
        default:
            return {
                ...state
            }
    }
}