import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import * as CartActions from '../../APIController/action-creators/cart.action-creators'
import * as UIActions from '../../APIController/action-creators/ui.action-creators'
import { bindActionCreators } from 'redux'
import { State } from '../../APIController/reducers/root.reducer'
import { CartItem } from '../../APIController/interfaces'

const CartSidebar = () => {

  const { cart } = useSelector((state:State) => state.cart)
  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions, dispatch)
  const UI = bindActionCreators(UIActions, dispatch)

  return (
    <div className='cart-sidebar'>
      <h3>Cart</h3>
      <div className="cart-sidebar__list">
        {cart.map((c:CartItem) => {
            return (
                <div key={c.id} className='cart-sidebar__item'>
                    <div className="cart-sidebar__item-img">
                      {c.image && <img src={c.image} alt='item-pic' />}
                    </div>
                    <div className="cart-sidebar__item-content">
                      <p className='cart-sidebar__heading-fix'>Title: {c.title}</p>
                      <p>Price: {c.price}</p>
                      <p>Quantity : {c.quantity}</p>
                    </div>
                    <div className="cart-sidebar__remove-item">
                        <i onClick={()=>cartActions.handleRemoveFromCart(c.id,cart)} className="fa fa-trash fa-2x"></i>
                    </div>
                </div>
            )
        })}
      </div>
      <div className="cart-sidebar__actions">
        <div onClick={()=>cartActions.handleClearCart()} className="cart-sidebar__clear">
          <h3>Clear Cart</h3>
        </div>
        <div onClick={()=>UI.handleSidebar(true)} className="cart-sidebar__close">
          <h3>Close</h3>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar
