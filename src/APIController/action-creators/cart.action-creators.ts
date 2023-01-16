import { Dispatch } from "redux";
import { CartTypes } from "../types";
import { CartItem } from "../interfaces";


export const handleAddToCart = (quantity:number,item:CartItem,cart:CartItem[]) => (dispatch:Dispatch<any>) =>{
    let tempCart = [...cart]
    tempCart.push({
        id:item.id,
        price_id:item.price_id,
        title:item.title,
        image:item.image,
        price:item.price,
        quantity:quantity
    })
    dispatch({
        type: CartTypes.ADD_TO_CART,
        cart: tempCart
    })
} 
export const handleRemoveFroCart = (id:number,cart:CartItem[]) => (dispatch:Dispatch<any>) =>{
    const tempCart = cart.filter((item:any) => item.id !== id)
    dispatch({
        type: CartTypes.REMOVE_FROM_CART,
        cart: tempCart
    })
} 
export const handleUpdateCartQuantity = (id:number,quantity:number,cart:CartItem[]) => (dispatch:Dispatch<any>) =>{
    let tempCart:CartItem[] = [...cart]
    const item = tempCart.find((item:any) => item.id === id) as CartItem
    item.quantity = quantity
    dispatch({
        type: CartTypes.UPDATE_QUANTITY,
        cart: tempCart
    })
} 
export const handleClearCart = () => (dispatch:Dispatch<any>) =>{
    dispatch({
        type: CartTypes.CLEAR_CART,
        cart: []
    })
} 