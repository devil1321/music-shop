import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../../APIController/reducers/root.reducer'

interface Song{
    misto:string;
    audio:string;
    umelec:string;
    song:string;
}

const Songs = () => {

  const { tracks } = useSelector((state:State) => state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions,dispatch)

  
  useEffect(()=>{
    serverActions.handleFetchTracks()
  },[])

  return (
    <div className='rap-challenge__songs'>
      <div className="rap-challenge__songs-header">
        <p>Místo</p>
        <p>Audio</p>
        <p>Umělec</p>
        <p>Song</p>
      </div>
      <div className="rap-challenge__songs-tracks">
        {tracks.map((t:any,i:number) => {
            return(
                <div className="rap-challenge__songs-track">
                    <p>#{i}</p>
                    <audio controls src={t.base64}></audio>
                    <p>{t.author}</p>
                    <p>{t.title}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Songs
