import React, { useState } from 'react'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
const TrackForm:React.FC<{url:string,id:number}> = ({url,id}) => {

  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions, dispatch)
  const [formData,setFormData] = useState({
    file:'',
    image:'',
    title:'',
    author:'',
    genres:'',
    tags:''
  })

  const handleChange = (e:any) =>{
    if(e.target.name !== 'file' && e.target.name !== 'image'){
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
    }else{
        setFormData({
            ...formData,
            [e.target.name]:e.target.files[0]
        })
    }
  }

  return (
    <div className="track-form">
    <h1>Add Track</h1>
    <form className="track-form__form" onSubmit={(e)=>{
        e.preventDefault()
        serverActions.handleUpdateOrAddTrack(formData,url,id)
    }}>
        <div className="track-form__field">
            <label >
                <i className="fa fa-file"></i>
               Load Track:
            </label>
            <input required onChange={(e)=>handleChange(e)} type="file" name="file"  />
        </div>
        <div className="track-form__field">
            <label >
                <i className="fa fa-file"></i>
               Load Image:
            </label>
            <input required onChange={(e)=>handleChange(e)} type="file" name="image"  />
        </div>
        <div className="track-form__field">
            <label >Title:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="title"  />
        </div>
        <div className="track-form__field">
            <label >Author:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="author"  />
        </div>
        <div className="track-form__field">
            <label >Genres:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="genres"  />
        </div>
        <div className="track-form__field">
            <label >Tags:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="tags"  />
        </div>
        <div className="track-form__field">
            <label >Price:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="price"  />
        </div>
        <div className="track-form__field">
            <label >Price ID:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="price_id"  />
        </div>
        <button type="submit">Save</button>
    </form>
</div>
  )
}

export default TrackForm
