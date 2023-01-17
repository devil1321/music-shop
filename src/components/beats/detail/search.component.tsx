import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import * as ServerActions from '../../../APIController/action-creators/server.action-creators'
import { State } from '../../../APIController/reducers/root.reducer'
import { bindActionCreators } from 'redux'
import { Link } from 'gatsby'

const Search = () => {

  const { user } = useSelector((state:State)=>state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)

  const handleActive = (e:any) =>{
    const credItems = document.querySelectorAll('.beat__detail-cred-item')
    credItems.forEach(credItem => credItem.classList.remove('beats__detail-active'))
    e.target.classList.add('beats__detail-active')

  }

  return (
    <div className='beats__detail-search'>
      <h3 className='beats__detail-logo'>FoscoAlma</h3>
      <form action="" className="beats__detail-form">
        <div className="beats__detail-form-field">
            <input type="text" />
            <i className="fa fa-search"></i>
        </div>
      </form>
      <div className="beats__detail-group">
        <Link to="/cart">
          <div onClick={(e:any)=>handleActive(e)} className="beats__detail-cart beat__detail-cred-item  beats__detail-active">
            <i className="fa fa-shopping-cart"></i>
            <p>Cart</p>
          </div>
        </Link>
        <div onClick={(e:any)=>{
          handleActive(e)
          if(user){
            serverActions.handleLogout()
          }
        }} className="beats__detail-credentials beat__detail-cred-item">{!user ? "Login" : "Logout"}</div>
      </div>
    </div>
  )
}

export default Search
