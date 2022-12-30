import React from 'react'

interface FaqItemProps{
    title:string;
    leftItem_1_title:string;
    leftItem_1_content:string;
    leftItem_2_title:string;
    leftItem_2_content:string;
    rightItemTitle:string;
    rightItemContent:string;
}

const FaqItem:React.FC<FaqItemProps> = ({title,leftItem_1_title,leftItem_1_content,leftItem_2_title,leftItem_2_content,rightItemTitle,rightItemContent}) => {
  return (
    <div className='pricing__faq-item'>
      <h2>{title}</h2>
      <div className="pricing__faq-left-content">
        <h3>{leftItem_1_title} songs?</h3>
        <p>{leftItem_1_content}</p>
        <h3>{leftItem_2_title}</h3>
        <p>{leftItem_2_content}</p>
      </div>
      <div className="pricing__faq-right-content">
        <h3>{rightItemTitle}</h3>
        <p>{rightItemContent}</p>
      </div>
    </div>
  )
}

export default FaqItem
