import React from 'react'
import useTitle from '../../hooks/useTitle'

const Intro:React.FC<{ html:string }> = ({html}) => {

  const [title,setTitle] = useTitle(html)

  return (
    <div className='beats__intro'>
      <h1 dangerouslySetInnerHTML={{__html:title as string}}></h1>
      <p>Be notified when I make a new beat!</p>
      <button>Subscribe and get free beat!</button>
    </div>
  )
}

export default Intro
