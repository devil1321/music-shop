import React from 'react'
import Player from './player.component'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const Hero:React.FC<{image:IGatsbyImageData,placeholder:IGatsbyImageData}> = ({image,placeholder}) => {
  return (
    <div className='beats__detail-hero'>
      <Player image={image} placeholder={placeholder} />
      <div className="beats__detail-hero-btn-group">
        <button>
          <i className="fa fa-download"></i>
        </button>
        <button><i className="fa fa-cart"></i> Add To Cart</button>
      </div>
    </div>
  )
}

export default Hero
