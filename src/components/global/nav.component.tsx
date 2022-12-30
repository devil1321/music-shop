import React from 'react'
import { Link } from 'gatsby'
const Nav = () => {
  return (
    <div className='nav'>
      <div className="nav__lang">
        <div className="nav__en">English</div>
        <div className="nav__divider">|</div>
        <div className="nav__pl">Polish</div>
      </div>
      <div className="nav__profile">
        <div className="nav__profile-info">s.domin1321@gmail.com</div>
        <div className="nav__divider">|</div>
        <Link to="/my-account" className="nav__my-account">
          My Account
        </Link>
      </div>
    </div>
  )
}

export default Nav