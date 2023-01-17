import React from 'react'
import Global from '../global/components'
const Header = () => {
  return (
    <div className="cart__header-wrapper">
      <Global.Title html="<b>Your Cart</b>" />
      <div className='cart__header'>
        <p>ID</p>
        <p>IMAGE</p>
        <p>TITLE</p>
        <p>QUANTITY</p>
        <p>ACTIONS</p>
      </div>
    </div>
  )
}

export default Header
