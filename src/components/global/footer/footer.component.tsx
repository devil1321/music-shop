import React from 'react'
import FooterComponents from './components'
const Footer = () => {
  return (
    <div className='footer'>
      <FooterComponents.Nav />
      <FooterComponents.Icons />
      <p>English | Ćesky</p>
      <FooterComponents.Foot />
    </div>
  )
}

export default Footer
