import React, { MutableRefObject, useRef,useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface CardProps{
    title:string;
    image:IGatsbyImageData;
    text:string;
}

const Card:React.FC<CardProps> = ({title,image,text}) => {

  const iconRef = useRef() as MutableRefObject<HTMLSpanElement>
  return (
    <div className="pricing__card">
        <Link to="">{title}</Link>
        <div className="pricing__card-body">
            <div className="pricing__card-img">
                {image && <GatsbyImage image={image}  alt="card-image"/>}
            </div>
            <div className="pricing__card-text">{text}</div>
        </div>
        <div className="pricing__card-footer">
            <span className="pricing__card-double-chevron">
                <FontAwesomeIcon icon={faChevronDown} />
                <FontAwesomeIcon icon={faChevronDown} />
            </span>
            <span>See pricing</span>
        </div>
    </div>
  )
}

export default Card