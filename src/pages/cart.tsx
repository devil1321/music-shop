import React from 'react'
import Global from '../components/global/components'
import Cart from '../components/cart/components'
import { useSelector } from 'react-redux'
import { State } from '../APIController/reducers/root.reducer'
import { CartItem } from '../APIController/interfaces'
import { Link } from 'gatsby'

const CartPage = () => {
  const { cart } = useSelector((state:State)=>state.cart)

  return (
    <Global.Layout title='Shop | Success' className='cart'>
        {cart?.length > 0 
        ? <div className="cart__cart-cart">
            <Cart.Header />
            <div className="cart__list">
                {cart.map((c:CartItem) => <Cart.Item key={c.id} cart_element={c} /> )}
            </div>
            <Link className='cart__link' to="/beats">Continue Shopping</Link>
            <Cart.Summary />
          </div>
        : <Cart.Empty />}
    </Global.Layout>
  )
}

export default CartPage
