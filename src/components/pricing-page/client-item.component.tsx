import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface ClientProps{
    isRight?:boolean;
    image:IGatsbyImageData;
    text:string;
    footText:string;
}

const Client:React.FC<ClientProps> = ({isRight,image,text,footText}) => {
  return (
    <div className={`pricing__client-item ${isRight && 'pricing__client-item-right'}`}>
      <div className="pricing__client-item-img">
        {image && <GatsbyImage image={image} alt="client-pic" /> }
      </div>
      <div className="pricing__client-item-content">
        <p>{text}</p>
        <h3>{footText}</h3>
      </div>
    </div>
  )
}

export default Client
