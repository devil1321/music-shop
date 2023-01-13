import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { State } from '../../APIController/reducers/root.reducer'
import { bindActionCreators } from 'redux'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { Link } from 'gatsby'
const Nav = () => {
  
  const { user } = useSelector((state: State) => state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)

  return (
    <div className="nav-admin">
        <div className="nav-admin__logo">Fosco Alma</div>
        <div className="nav-admin__links">
            <Link to="/admin" className="nav-admin__link">Home</Link>
            {user 
            ?  <React.Fragment>
                    <Link to="#" onClick={()=>serverActions.handleLogout()} className="nav-admin__link">Logout</Link>
                    <Link to="/my-account" className="nav-admin__link">Pofile</Link>
                </React.Fragment>
            : <Link to="/login" className="nav-admin__link">Login</Link>}
            <Link to="/manage-tracks" className="nav-admin__link">Manage Tracks</Link>
        </div>
    </div>
  )
}

export default Nav
