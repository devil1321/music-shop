import React from 'react'
import Global from '../components/global/components'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../APIController/action-creators/cart.action-creators'

const Success = () => {
  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions, dispatch)

  return (
    <Global.Layout title='Shop | Success' className='success'>
      <Global.Title html="<b>Your payment was realized!</b>" />
      <Link onClick={()=>cartActions.handleClearCart()} to="/beats">Continue Shopping</Link>
    </Global.Layout>
  )
}

export default Success
