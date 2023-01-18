import React,{useEffect,useState} from 'react'
import Admin from '../components/admin/components'
import Global from '../components/global/components'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../APIController/reducers/root.reducer'
import { bindActionCreators } from 'redux'
import * as ServerActions from '../APIController/action-creators/server.action-creators'
import { navigate } from 'gatsby'

const ManageTracks = () => {

  const { tracks,user } = useSelector((state:State)=>state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)
  const [url,setUrl] = useState<string>('')
  const [isForm,setIsForm] = useState<boolean>(false)
  const [type,setType] = useState<string>('Add Track')
  const [id,setId] = useState<number>(0)

  useEffect(()=>{
    if(localStorage.getItem('access_token') && !user){
      serverActions.handleFetchTracks()
    }
    if(user && !user?.is_staff){
        navigate('/not-allow')
    }
    if(isForm){
        setType('Close')
    }else{
        setType('Add Track')
    }
  },[user,isForm])
  return (
    <Admin.Layout>
    <Global.Title html="<b>Manage Tracks</b>"/>

    <div className="manage-tracks">
    <div className="manage-tracks__header">
        <p>ID</p>
        <p>Author</p>
        <p>Title</p>
        <p>Actions</p>
    </div>
    <div className="manage-tracks__content">
        {tracks.map((track:any) =>  {
        return (
            <div key={track.id} className="manage-tracks__item">
                <p className="manage-tracks__pk">{track.id}</p>
                <p>{track.author}</p>
                <p>{track.title}</p>
                <div className="manage-tracks__actions">
                    <a onClick={()=>serverActions.handleRemoveTrack(track.id)} href="#">
                        <i className="fa fa-trash fa-2x"></i>
                    </a>
                    <div className="manage-tracks__divider"></div>
                    <a onClick={()=>{
                        setIsForm(true)
                        setId(track.id)
                        setUrl('/update-track/')
                        serverActions.handleFilterTrack(track.id,tracks)
                    }} href="#" className="manage-tracks__btn-edit">
                        <i className="fa fa-edit fa-2x"></i>
                    </a>
                </div>
            </div>)}
        )}
    </div>
    <div className="manage-tracks__btn-wrapper">
        <button onClick={()=>{
            setIsForm(!isForm)
            setUrl('/add-track/')
        }} className="manage-tracks__btn-add">{type}</button>
    </div>
    {isForm && <Admin.TrackForm  url={url} id={id} />}
</div>
</Admin.Layout>
  )
}

export default ManageTracks
