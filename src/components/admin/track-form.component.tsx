import React, { useState,useEffect } from 'react'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from '../../APIController/reducers/root.reducer'
import useMessage from '../../hooks/useMessage'
import { Track } from '../../APIController/interfaces'
const TrackForm:React.FC<{url:string,id:number}> = ({url,id}) => {

  const dispatch = useDispatch()
  const { msg,file } = useSelector((state:State) => state.server)

  const [message,setMessage] = useMessage(msg)

  const serverActions = bindActionCreators(ServerActions, dispatch)
  const [formData,setFormData] = useState({
    file:'',
    image:'',
    title:'',
    author:'',
    genres:'',
    tags:'',
    price:'',
    price_id:'',
  })

  useEffect(()=>{
    setFormData({
        file:'',
        image:'',
        title:file.title,
        author:file.author,
        genres:file.genres,
        tags:file.tags,
        price:file.price,
        price_id:file.price_id,
    })
  },[file])

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
    <h3 className='track-form__msg'>{message as string}</h3>
    <form className="track-form__form" onSubmit={(e:any)=>{
        console.log(formData)
        e.preventDefault()
        serverActions.handleUpdateOrAddTrack(formData,url,id)
        setFormData({
            file:'',
            image:'',
            title:'',
            author:'',
            genres:'',
            tags:'',
            price:'',
            price_id:'',
          })
    }}>
        <div className="track-form__field">
            <label >
                <i className="fa fa-file"></i>
               Load Track:
            </label>
            <input required onChange={(e)=>handleChange(e)} type="file" name="file"  value={formData.file} />
        </div>
        <div className="track-form__field">
            <label >
                <i className="fa fa-file"></i>
               Load Image:
            </label>
            <input required onChange={(e)=>handleChange(e)} type="file" name="image"  value={formData.image}/>
        </div>
        <div className="track-form__field">
            <label >Title:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="title"  value={formData.title}/>
        </div>
        <div className="track-form__field">
            <label >Author:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="author" value={formData.author} />
        </div>
        <div className="track-form__field">
            <label >Genres:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="genres" value={formData.genres} />
        </div>
        <div className="track-form__field">
            <label >Tags:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="tags" value={formData.tags} />
        </div>
        <div className="track-form__field">
            <label >Price:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="price" value={formData.price} />
        </div>
        <div className="track-form__field">
            <label >Price ID:</label>
            <input required onChange={(e)=>handleChange(e)} type="text" name="price_id" value={formData.price_id} />
        </div>
        <button type="submit">Save</button>
    </form>
</div>
  )
}

export default TrackForm
