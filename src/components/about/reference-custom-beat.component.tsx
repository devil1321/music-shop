import React from 'react'
import Global from '../global/components'
import { GatsbyImage } from 'gatsby-plugin-image';
interface ReferenceCustomBeatProps{
  title:string;
  contentArr:any[]
}

const ReferenceCustomBeat:React.FC<ReferenceCustomBeatProps> = ({title,contentArr}) => {
  return (
    <div className='about__reference'>
      <Global.Title html={title} />
      <div className="about__reference-content">
      {contentArr.map(c => {
        return(
          <div className='about__reference-item'>
            <div className="about__reference-img">
                {c.image && <video controls>
                                <source src={c.link} type="video/mp4" />
                            </video>}
            </div>
            <p>{c.footer}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ReferenceCustomBeat
