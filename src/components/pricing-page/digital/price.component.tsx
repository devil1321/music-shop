import React from 'react'

const Price:React.FC<{price:number}> = ({price}) => {
  return (
    <div className='pricing__digital-price'>
      <h3 className='pricing__digital-price-header'><b>Your Final Price:</b></h3>
      <h2>${price}</h2>
      <p className="pricing__digital-price-footer">click the price for the detail</p>
    </div>
  )
}

export default Price
