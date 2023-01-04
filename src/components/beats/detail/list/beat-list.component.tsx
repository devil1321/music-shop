import React, { useEffect, useState } from 'react'
import Item from './beat-list-item.component';
import src from "../../../../media/Gibbs x Avi - 30 stopni.mp3"
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useSelector, useDispatch } from 'react-redux'
import * as PlayerActions from '../../../../APIController/action-creators/player.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../../../../APIController/reducers/root.reducer'


const List:React.FC<{image:IGatsbyImageData}> = ({image}) => {
  const arr:boolean[] = []

  const { isPlay } = useSelector((state:State) => state.player)

  const [active,setActive] = useState<boolean[]>([true])
  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [activeIndex,setActiveIndex] = useState<any>('init')

  const handleMakeUnactive = () =>{
    for(let i = 0; i < 3; i++){
      arr[i] = false
    }
    setActive(arr)
  }

  const handleMakeActive = (index:any) =>{
    if(index === 'init') return
    const tempActive:boolean[] = [...active]
    for(let i = 0; i < tempActive.length; i++){
      tempActive[i] = false
    }
    tempActive[index] = true
    setActiveIndex(index)
    setActive(tempActive)
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
  }, [isPlay,activeIndex])
  

  return (
    <div className='beats__beats-list'>
      {active.map((a,i) => <Item isActive={a} index={i} handleMakeActive={handleMakeActive} key={i} src={src} image={image} title="SOMETIMES [Guitar Pop Beat]" price={19} genres={['HIPHOP',"RAP"]} tags={['guitar','pop','guitar beat']} />)}
    </div>
  )
}

export default List
