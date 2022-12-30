import React from 'react'

interface CountProps{
  text:string;
  number:number;
}

const Count:React.FC<CountProps> = ({text,number}) => {
  return (
    <div className="pricing__count">
        <h2>{number}+</h2>
        <p>{text}</p>
    </div>
  )
}

export default Count