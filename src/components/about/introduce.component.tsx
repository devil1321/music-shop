import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface IntroduceProps{
  image:IGatsbyImageData
  content:string;
}

const Introduce:React.FC<IntroduceProps> = ({image,content}) => {
  return (
    <div className='about__introduce'>
      <div className="about__introduce-img">
        {image && <GatsbyImage image={image} alt="profile-pic" />}
      </div>
      <div className="about__introduce-content">{content}</div>
    </div>
  )
}

export default Introduce
