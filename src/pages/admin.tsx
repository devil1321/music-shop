import React,{ useEffect} from 'react'
import Admin from '../components/admin/components'
import Global from '../components/global/components'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../APIController/reducers/root.reducer'
import { bindActionCreators } from 'redux'
import * as ServerActions from '../APIController/action-creators/server.action-creators'

const TrackList = () => {

  const { tracks } = useSelector((state:State)=>state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)

  useEffect(()=>{
    if(localStorage.getItem('access_token')){
      serverActions.handleFetchTracks()
    }
  },[])

  return (
    <Admin.Layout>
    <Global.Title html="<b>Loaded Tracks</b>"/>
    <div className="track-list">
        <div className="track-list__header">
            <p>Author</p>
            <p>Title</p>
            <p>Audio</p>
        </div>
        <div className="track-list__content">
            {tracks.map((track: any) =>
                <div key={track.id} className="track-list__item">
                    <p>{track.author}</p>
                    <p>{track.title}</p>
                    <audio controls src={track.base64}></audio>
                </div>)}
        </div>
    </div>
    </Admin.Layout>
  )
}

export default TrackList
