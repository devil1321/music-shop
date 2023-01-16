import { CartTypes } from "../types"
import { Action } from "../action-types/cart.action-types";

interface InitDataProps{
  cart:{
    id:string,
    quantity:number;
  }[]
}

const initData:InitDataProps = {
    cart:[]
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case CartTypes.ADD_TO_CART:
            return {
                ...state,
                cart:action.cart
            }
        case CartTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart:action.cart
            }
        case CartTypes.UPDATE_QUANTITY:
            return {
                ...state,
                cart:action.cart
            }
        default:
            return {
                ...state
            }
    }
}