import React from 'react'
import useLink from '../../hooks/useLink';

interface HeroItemProps{
    title:string;
    contentWithLink:string;
}

const HeroItem:React.FC<HeroItemProps> = ({title,contentWithLink}) => {
  
  const [withLink,setLink] = useLink(contentWithLink)

  return (
    <div className='rap-challenge__hero-item'>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{__html:withLink as string}}></p>
    </div>
  )
}

export default HeroItem
