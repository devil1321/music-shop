import React from 'react'
import Global from '../components/global/components'
import Cancel from '../components/cancel/components'
import { Link } from 'gatsby'
import {  useSelector } from 'react-redux'
import { State } from '../APIController/reducers/root.reducer'

const CancelPage = () => {
  const { cart } = useSelector((state:State) => state.cart)

  return (
    <Global.Layout title='Shop | Success' className='cancel'>
      <Global.Title html="<b>Your payment was not realized!</b>" />
      {cart?.length > 0 
       ? <div className='cancel__cart-wrapper'>
          <Global.Title html="Your cart" />
          <div className="cancel__cart">
            {cart?.map((c:any) =>{
              return <Cancel.Item cartItem={c} />
            })}
          </div>
          </div>
          : <Global.Title html="Your cart is empty" />}
      <div className="cancel__links">
        <Link to="/beats">Continue Shopping</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </Global.Layout>
  )
}

export default CancelPage
