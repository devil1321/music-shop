import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { CartItem } from '../../APIController/interfaces';

interface CartItemProps{
    cartItem:CartItem
}

const Item:React.FC<CartItemProps> = ({cartItem}) => {
  const { image, title, quantity } = cartItem;
  return (
    <div className='cancel__cart-item'>
        <div className="cancel__cart-item-img">
            {image && <img src={image} alt="beat-img" />}
        </div>
        <h3>{title}</h3>
        <div className="cancel__quantity">{quantity}</div>
    </div>
  )
}

export default Item
