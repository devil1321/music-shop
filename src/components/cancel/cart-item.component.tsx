import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { CartItem } from '../../APIController/interfaces';
import * as CartActions from '../../APIController/action-creators/cart.action-creators';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../APIController/reducers/root.reducer';

interface CartItemProps{
    cartItem:CartItem
}

const Item:React.FC<CartItemProps> = ({cartItem}) => {
  const {id, image, title, quantity } = cartItem;

  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions, dispatch)
  const { cart } = useSelector((state:State) => state.cart)

  return (
    <div className='cancel__cart-item'>
        <div className="cancel__cart-item-img">
            {image && <img src={image} alt="beat-img" />}
        </div>
        <p><span>Title:</span> {title}</p>
        <p className="cancel__cart-item-quantity"><span>Quantity:</span> {quantity}</p>
        <div className="cancel__cart-item-actions" onClick={()=>cartActions.handleRemoveFromCart(id,cart)}>
            <i className="fa fa-trash fa-2x"></i>
        </div>
    </div>
  )
}

export default Item
