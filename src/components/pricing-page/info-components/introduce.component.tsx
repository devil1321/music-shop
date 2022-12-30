import React from 'react'
import { PricingPageImagesNodes } from '../../../interfaces'
import { useDynamicImage } from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
interface IntroduceProps{
    images:{
        node:PricingPageImagesNodes[]
    }
}

const Introduce:React.FC<IntroduceProps> = ({images}) => {
    const image = useDynamicImage({images,name:'profile-pic.jpg'})

  return (
    <div className='pricing__info-introduce'>
        <div className="pricing__info-introduce-img">
            {image && <GatsbyImage image={image} alt="profile-pic"   />} 
        </div>
       <div className="pricing__info-introduce-desc">
        <p>I know it's important to have a trust between the client and a producer. It develops gradually, from our first communication to our first succesfully completed project. Please use the contact form and specify what you would be interested in. You can also check out the projects I worked on in the past or read something about me. I will be glad to also know you better, so we can make the best out of our project!</p>
        <div className="pricing__info-introduce-links">
            <Link to="/about">About</Link>        
            <div className='pricing__info-introduce-link-divider'>|</div>
            <Link to="#reference">Reference</Link>
        </div>
       </div>
    </div>
  )
}

export default Introduce