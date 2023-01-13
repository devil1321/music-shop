import React, { useEffect, useState } from 'react'
import Item from './beat-list-item.component';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useSelector, useDispatch } from 'react-redux'
import * as ServerActions from '../../../../APIController/action-creators/server.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../../../../APIController/reducers/root.reducer'


const List:React.FC<{image:IGatsbyImageData}> = ({image}) => {
  const arr:any[] = []

  const { isPlay } = useSelector((state:State) => state.player)
  const { tracks } = useSelector((state:State) => state.server)

  const [activeTracks,setActiveTracks] = useState<any[]>([])
  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [activeIndex,setActiveIndex] = useState<any>('init')

  const handleMakeUnactive = () =>{
    for(let i = 0; i < tracks.length; i++){
      arr[i] = {
        ...tracks[i],
        active:false,
      }
      setActiveTracks(arr)
    }
  }

  const handleMakeActive = (index:any) =>{
    if(index === 'init') return
    const tempActive:any[] = [...activeTracks]
    for(let i = 0; i < tempActive.length; i++){
      tempActive[i].active = false
    }
    tempActive[index].active = true
    setActiveIndex(index)
    setActiveTracks(tempActive)
  }

  useEffect(() => {
    if(!isLoad){
      setIsLoad(true)
      handleMakeUnactive()
    }
    if(isLoad && !isPlay){
      handleMakeUnactive()
    }else if(isLoad && isPlay){
      handleMakeActive(activeIndex)
    }
  }, [isPlay,activeIndex,tracks])
  

  return (
    <div className='beats__beats-list'>
      {activeTracks.map((t:any,i:number) => <Item 
                                              isActive={t.active} 
                                              index={i} 
                                              handleMakeActive={handleMakeActive} 
                                              key={i} 
                                              source={t.base64} 
                                              image={t.image} 
                                              title={t.title} 
                                              price={19} 
                                              genres={t.genres.split(',')} 
                                              tags={t.tags.split(',')} />)}
    </div>
  )
}

export default List
