import React from 'react'
import { Link } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../APIController/reducers/root.reducer'
import { bindActionCreators } from 'redux'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'

const Nav = () => {
  const { user } = useSelector((state:State) => state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)
  return (
    <div className='nav'>
      <div className="nav__lang">
        <div className="nav__en">English</div>
        <div className="nav__divider">|</div>
        <div className="nav__pl">Polish</div>
      </div>
      <div className="nav__profile">
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