import React from 'react'

interface ItemProps{
  title:string;
  price:number;
  songs:number;
  tracks:number;
}

const Item:React.FC<ItemProps> = ({title,price,songs,tracks}) => {
  return (
    <div className="pricing__digital-item">
      <h2>{title}</h2>
      <h3>${price}</h3>
      <p>{songs} songs</p>
      <p>{tracks} track items</p>
    </div>
  )
}

export default Item