import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface ProfileItemProps{
    name:string;
    image:IGatsbyImageData
}

const ProfileItem:React.FC<ProfileItemProps> = ({name,image}) => {
  return (
    <div className='rap-challenge__profile-item'>
      <div className="rap-challenge__profile-item-img">
        {image && <GatsbyImage image={image} alt="profile-pic" />}
      </div>
      <h3>{name}</h3>
    </div>
  )
}

export default ProfileItem
