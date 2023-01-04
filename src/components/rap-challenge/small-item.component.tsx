import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react'

interface SmallItemProps{
    foot:string;
    image:IGatsbyImageData
}

const SmallItem:React.FC<SmallItemProps> = ({foot,image}) => {
  return (
    <div className='rap-challenge__small-item'>
      <div className="rap-challenge__small-item-img">
        {image && <GatsbyImage image={image} alt="item-pic" />}
      </div>
      <Link to="#" className='f-link'>{foot}</Link>
    </div>
  )
}

export default SmallItem
