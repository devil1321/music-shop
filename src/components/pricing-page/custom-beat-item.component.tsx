import React from 'react'

interface CustomBeatItemProps{
    title:string;
    price:number;
    text:string;
}

const CustomBeatItem:React.FC<CustomBeatItemProps> = ({title,price,text}) => {
  return (
    <div className="pricing__custom-beat-item">
      <h3>{title}</h3>
      <h3>${price}</h3>
      <p>{text}</p>
    </div>
  )
}

export default CustomBeatItem
