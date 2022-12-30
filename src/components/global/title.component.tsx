import React, { useState, useEffect }from 'react'
import useTitle from '../../hooks/useTitle';

interface TitleProps{
    html:string;
}

const Title:React.FC<TitleProps> = ({html}) => {
  const [htmlState,setHtmlState] = useTitle(html)
  
  return (
    <div className="title" dangerouslySetInnerHTML={{__html:htmlState as string }}></div>
  )
}

export default Title