import React from 'react'
import useTitle from '../../../hooks/useTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';

interface YoutubeItemProps{
    html:string;
    image:IGatsbyImageData;
}

const YoutubeItem:React.FC<YoutubeItemProps> = ({html,image}) => {

const [title,setTitle] = useTitle(html)

  return (
    <div className='pricing__youtube-item'>
      <div className="pricing__youtube-item-title-wrapper">
        <FontAwesomeIcon icon={faArrowDown} />
        <p className="pricing__youtube-item-title" dangerouslySetInnerHTML={{__html:title as string}}></p>
      </div>
      <div className="pricing__youtube-item-img">
        <div className="pricing__youtube-item-overlay"></div>
        {image && <GatsbyImage image={image} alt="youtube-pic" />}
      </div>
    </div>
  )
}

export default YoutubeItem
