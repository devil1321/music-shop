import React from 'react'
import Global from '../global/components'
import { GatsbyImage } from 'gatsby-plugin-image';

interface ReferenceMixMasteringProps{
  title:string;
  contentArr:any[]
}

const ReferenceMixMastering:React.FC<ReferenceMixMasteringProps> = ({title,contentArr}) => {
  return (
    <div className='about__reference'>
      <Global.Title html={title} />
      <div className="about__reference-content">
      {contentArr.map(c => {
        return(
          <div className='about__reference-item'>
            <div className="about__reference-img">
              {c.image && <GatsbyImage image={c.image} alt="reference-img" />}
            </div>
            <h3>{c.title}</h3>
            <p>{c.footer}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ReferenceMixMastering
