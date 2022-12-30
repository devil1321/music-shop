import React from 'react'
import { Link } from 'gatsby'
const Navbar:React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/pricing">Pricing</Link>
      <Link to="/beats">Beats</Link>
      <Link to="/mix-mastering">Mastering</Link>
      <Link to="/custom-beat">Custom Beat</Link>
      <Link to="/about">About</Link>
      <Link to="/rap-challenge">Rap Challenge</Link>
    </div>
  )
}

export default Navbar