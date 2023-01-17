import React,{useState, useEffect} from 'react'
import { CartItem } from '../../APIController/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../../APIController/action-creators/cart.action-creators'
import { State } from '../../APIController/reducers/root.reducer'

interface CartItemProps{
  cart_element: CartItem
}

const Item:React.FC<CartItemProps> = ({cart_element}) => {
  const { id, image, title, quantity } = cart_element;
  const [quantityState,setQuantity] = useState<number>(quantity)

  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions,dispatch)
  const { cart } = useSelector((state:State) => state.cart)

  useEffect(()=>{
      cartActions.handleUpdateCartQuantity(id,quantityState,cart)
      if(quantityState < 0){
        cartActions.handleRemoveFromCart(id,cart)
      }
  },[quantityState])

  return (
    <div className='cart__item'>
      <p>{id}</p>
      <div className="cart__item-img">
        {image && <img src={image} alt='cart-item-pic' />}
      </div>
      <h3>{title}</h3>
      <div className="cart__item-quantity">
        <div onClick={()=>setQuantity(quantityState + 1)}>+</div>
        <div className="cart__item-quantity-state">{quantityState}</div>
        <div onClick={()=>setQuantity(quantityState - 1)}>-</div>
      </div>
      <div className="cart__item-actions">
        <i onClick={()=>cartActions.handleRemoveFromCart(id,cart)} className="fa fa-trash fa-2x"></i>
      </div>
    </div>
  )
}

export default Item
