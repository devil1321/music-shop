import React from 'react'
import Global from '../global/components'
import { Link } from 'gatsby'

const Empty = () => {
  return (
    <div className='cart__empty'>
      <Global.Title html="<b>Your Cart Is Currently Empty</b>" />
      <Link to="/beats">Continue Shopping</Link>
    </div>
  )
}

export default Empty
