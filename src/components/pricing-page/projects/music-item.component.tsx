import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react'
import useTitle from '../../../hooks/useTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
interface MusicItemProps{
    titleHtml:string;
    subtitle:string;
    textHtml:string;
    image:IGatsbyImageData
}


const MusicItem:React.FC<MusicItemProps> = ({titleHtml,subtitle,textHtml,image}) => {

  const [htmlState,setHTML] = useTitle(titleHtml)  
  const [htmlSubtitleState,setHTMLSubtitle] = useTitle(textHtml)  

  return (
    <div className='pricing__music-item'>
      <h3 dangerouslySetInnerHTML={{__html:htmlState as string}}></h3>
      <p>{subtitle}</p>
      <div className="pricing__music-item-text">
        <FontAwesomeIcon icon={faArrowDown} />
        <p dangerouslySetInnerHTML={{__html:htmlSubtitleState as string}}></p>
      </div>
      <div className="pricing__music-item-image">
        <div className="pricing__music-item-overlay"></div>
        {image && <GatsbyImage image={image} alt="music-pic" /> }
      </div>
    </div>
  )
}

export default MusicItem
