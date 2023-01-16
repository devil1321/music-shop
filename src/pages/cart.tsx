import React from 'react'
import Global from '../components/global/components'
import Cart from '../components/cart/components'
import { Link } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../APIController/action-creators/cart.action-creators'
import { State } from '../APIController/reducers/root.reducer'
import { CartItem } from '../APIController/interfaces'

const CancelPage = () => {
  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions, dispatch)
  const { cart } = useSelector((state:State)=>state.cart)
  return (
    <Global.Layout title='Shop | Success' className='cart'>
        {cart?.length > 0 
        ? <div className="cart__cart-cart">
            <Cart.Header />
            <div className="cart__list">
                {cart.map((c:CartItem) =>{
                    return(
                        <Cart.Item cartItem={c} />
                        )
                    })}
            </div>
            <Cart.Summary />
        </div>
        : <Cart.Empty />}
    </Global.Layout>
  )
}

export default CancelPage
