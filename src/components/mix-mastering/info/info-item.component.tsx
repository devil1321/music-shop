import React from 'react'

interface ItemProps{
    title:string;
    text:string;
}

const Item:React.FC<ItemProps> = ({title,text}) => {
  return (
    <div className='mix-mastering__info-item'>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Item
