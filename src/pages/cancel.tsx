import React from 'react'
import Global from '../components/global/components'
import Cancel from '../components/cancel/components'
import { Link } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../APIController/action-creators/cart.action-creators'
import { State } from '../APIController/reducers/root.reducer'

const CancelPage = () => {
  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions, dispatch)
  const { cart } = useSelector((state:State)=>state.cart)
  return (
    <Global.Layout title='Shop | Success' className='success'>
      <Global.Title html="<b>Your payment was not realized!</b>" />
      <div className="cancel__cart">
        {cart.map((c:any) =>{
            <Cancel.Item cartItem={c} />
        })}
      </div>
      <div className="cancel__links">
        <Link to="/beats">Continue Shopping</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </Global.Layout>
  )
}

export default CancelPage
