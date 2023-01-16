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
      {activeTracks.map((t:any,i:number) => {
                                            const item = {
                                              id:t.id,
                                              price_id:t.price_id,
                                              tags:t.tags.split(','),
                                              genres:t.genres.split(','),
                                              quantity:1,
                                              title:t.title,
                                              source:t.base64,
                                              price:t.price,
                                              image:t.image
                                            }
                                            return <Item 
                                              isActive={t.active} 
                                              index={i} 
                                              handleMakeActive={handleMakeActive} 
                                              key={i} 
                                              item={item} />
                                              })}
    </div>
  )
}

export default List
