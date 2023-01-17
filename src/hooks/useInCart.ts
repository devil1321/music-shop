import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { State } from '../APIController/reducers/root.reducer'
import { CartItem } from '../APIController/interfaces'

const useInCart = (id:number) => {
  const { cart } = useSelector((state:State)=>state.cart)
  const [isInCart,setIsInCart] = useState<boolean>(false)

  const checkIsInCart = () =>{
    const isIn = cart.filter((c:CartItem) => c.id === id)
    if(isIn.length > 0){
        setIsInCart(true)
    }
  }

  useEffect(()=>{
    checkIsInCart()
  },[cart])

  return [isInCart,setIsInCart] 
}

export default useInCart