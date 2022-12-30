import React from 'react'
import Search from './search.component'
import Hero from './hero/hero.component'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const Detail:React.FC<{image:IGatsbyImageData,placeholder:IGatsbyImageData}> = ({image,placeholder}) => {
  return (
    <div className='beats__detail'>
      <Search />
      <Hero image={image} placeholder={placeholder}/>
    </div>
  )
}

export default Detail
