import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../APIController/reducers/root.reducer'
import { bindActionCreators } from 'redux'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import * as UIActions from '../../APIController/action-creators/ui.action-creators'
import { CartItem } from '../../APIController/interfaces'

const Nav = () => {
  const { user } = useSelector((state:State) => state.server)
  const { cart } = useSelector((state:State) => state.cart)
  const { isOpen } = useSelector((state:State) => state.ui)
  const [items,setItems] = useState<number>(0)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)
  const UI = bindActionCreators(UIActions, dispatch)

  const handleItems = () =>{
    let tempResult = 0;
    cart?.forEach((c:CartItem) =>{
      tempResult += c.quantity
    })
    setItems(tempResult)
  }

  useEffect(() => {
    handleItems()
  }, [cart])
  

  return (
    <div className='nav'>
      <div className="nav__lang">
        <div className="nav__en">English</div>
        <div className="nav__divider">|</div>
        <div className="nav__pl">Polish</div>
      </div>
      <div className="nav__profile">
        <div onClick={()=>UI.handleSidebar(!isOpen)} className="nav__cart">
          <i className="fa fa-shopping-cart fa-1x"></i>
          <div className="nav__cart-items">{items}</div>
        </div>
        <div className="nav__profile-info">{user?.username}</div>
        <div className="nav__divider">|</div>
        <Link to="/my-account" className="nav__my-account">
          My Account
        </Link>
        <div className="nav__divider">|</div>
        <Link to="#" onClick={()=>{serverActions.handleLogout()}} className="nav__my-account">
          Logout
        </Link>
      </div>
    </div>
  )
}

export default Nav