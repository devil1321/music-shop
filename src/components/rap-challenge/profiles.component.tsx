import React from 'react'
import ProfileItem from './profile-item'
import { graphql, useStaticQuery } from 'gatsby'
import { useDynamicImage } from '../../hooks/useImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ProfilesProps{
    title:string;
    text:string;
}

const Profiles:React.FC<ProfilesProps> = ({title,text}) => {

    const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: WEBP)
            fluid {
              originalName
            }
          }
        }
      }
    }
  `)

  const images = data.allImageSharp.edges


  return (
    <div className='rap-challenge__profiles'>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="rap-challenge__profiles-items">
            <ProfileItem image={useDynamicImage({images,name:"profile-pic-1.jpg"}) as IGatsbyImageData} name="Refew" />
            <ProfileItem image={useDynamicImage({images,name:"profile-pic-2.jpg"}) as IGatsbyImageData} name="Refew" />
            <ProfileItem image={useDynamicImage({images,name:"profile-pic-3.jpg"}) as IGatsbyImageData} name="Refew" />
        </div>
    </div>
  )
}

export default Profiles
