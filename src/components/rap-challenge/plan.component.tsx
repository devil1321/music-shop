import React from 'react'
import Link from 'gatsby';
import useLink from '../../hooks/useLink';

interface PlanProps{
    title:string;
    one:string;
    two:string;
    three:string;
    itemsTitle:string;
    planOneDate:string;
    planOneText:string;
    planTwoDate:string;
    planTwoText:string;
    planThreeDate:string;
    planThreeText:string;
    planFourDate:string;
    planFourText:string;
    foot:string;
}

const Plan:React.FC<PlanProps> = ({title,one,two,three,planOneDate,itemsTitle,planOneText,planTwoDate,planTwoText,planThreeDate,planThreeText,planFourDate,planFourText,foot}) => {

    const [withLink,setLink] = useLink(foot)

  return (
    <div className='rap-challenge__plan'>
        <div className="rap-challenge__plan-intro">
            <h2>{title}</h2>
            <ol>
                <li>{one}</li>
                <li>{two}</li>
                <li>{three}</li>
            </ol>
        </div>

        <div className="rap-challenge__plan-items-wrapper">
            <h3>{itemsTitle}</h3>
            <div className='rap-challenge__plan-items'>
                <div className="rap-challenge__plan-item">
                    <h3>{planOneDate}</h3>
                    <p>{planOneText}</p>
                </div>
                <div className="rap-challenge__plan-divider">
                    <div></div>
                    <div></div>
                </div>
                <div className="rap-challenge__plan-item">
                    <h3>{planTwoDate}</h3>
                    <p>{planTwoText}</p>
                </div>
                <div className="rap-challenge__plan-divider">
                    <div></div>
                    <div></div>
                </div>
                <div className="rap-challenge__plan-item">
                    <h3>{planThreeDate}</h3>
                    <p>{planThreeText}</p>
                </div>
                <div className="rap-challenge__plan-divider">
                    <div></div>
                    <div></div>
                </div>
                <div className="rap-challenge__plan-item">
                    <h3>{planFourDate}</h3>
                    <p>{planFourText}</p>
                </div>
            </div>
            <div className="rap-challenge__plan-footer">
                <h2 dangerouslySetInnerHTML={{__html:withLink as string}}></h2>
            </div>
        </div>
        
    </div>
  )
}

export default Plan
