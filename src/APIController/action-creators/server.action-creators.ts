import { ServerTypes } from "../types";
import { Dispatch } from "redux";
import axios from 'axios'
import { access } from "fs";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const getToken = () =>{
    return localStorage.getItem('access_token')
}
const getTokenRefresh = () =>{
    return localStorage.getItem('refresh_token')
}

export const handleLogin = (e:any) => (dispatch:Dispatch<any>) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    axios({
        method: "POST",
        url: "https://devil1321.pythonanywhere.com/api/login/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(res => {
            if(res.data.msg){
                return res.data
            }else{
                return res.data
            }
        })        
        .then(data =>{
            if(!data?.msg){
                localStorage.setItem('access_token',data.access)
                localStorage.setItem('refresh_token',data.refresh)
                dispatch({
                    type:ServerTypes.LOGIN,
                    tokens:data,
                    msg:''
                })
            }else{
                dispatch({
                    type:ServerTypes.LOGIN,
                    user:null,
                    msg:data.msg
                })
            }
        })
        .catch((err:any) => console.log(err))
}

export const handleLogout = () => (dispatch:Dispatch<any>) =>{
   localStorage.removeItem('access_token')
   localStorage.removeItem('refresh_token')
   dispatch({
    type:ServerTypes.LOGOUT,
    user:null,
   })
}


export const handleSignUp = (e:any) => (dispatch:Dispatch<any>) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    axios({
        method: "post",
        url: "https://devil1321.pythonanywhere.com/register/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(res => {
            if(res.data.msg){
                return res.data
            }else{
                return JSON.parse(res.data)
            }
        }) 
        .then(data => {
            console.log('data',data)
            if(!data?.msg){
                dispatch({
                    type:ServerTypes.SIGN_UP,
                    user:data[0],
                    msg:''
                })
            }else{
                dispatch({
                    type:ServerTypes.SIGN_UP,
                    user:null,
                    msg:data.msg
                })
            }
        })
        .catch((err:any) => console.log(err))
}


export const handleInit = () => (dispatch:Dispatch<any>) =>{
    const token = getToken()
    try{

        axios({
            method: "GET",
        url: "https://devil1321.pythonanywhere.com/init/",
        headers:{
            'Authorization':`Bearer ${token}`
        }
      })
      .then(res => {
            if(res.data.msg){
                return res.data
            }else{
                return JSON.parse(res.data)
            }
        }) 
        .then(data => {
            if(!data?.msg){
                dispatch({
                    type:ServerTypes.INIT_USER,
                    user:data[0].fields,
                    msg:''
                })
            }else{
                dispatch({
                    type:ServerTypes.INIT_USER,
                    user:null,
                    msg:data.msg
                })
            }
        })
        .catch((err:any) => console.log(err))
    }
    catch(err){
        console.log(err)
    }
}


export const handleInitPerson = () => (dispatch:Dispatch<any>) =>{
    const token = getToken()
    axios({
        method: "GET",
        url: "https://devil1321.pythonanywhere.com/init-person/",
        headers:{
            'Authorization':`Bearer ${token}`
        }
      })
      .then(res => {
            if(res.data.msg){
                return res.data
            }else{
                return JSON.parse(res.data)
            }
        }) 
        .then(data => {
            if(!data?.msg){
                dispatch({
                    type:ServerTypes.INIT_PERSON,
                    person:data[0].fields,
                    msg:''
                })
            }else{
                dispatch({
                    type:ServerTypes.INIT_PERSON,
                    person:null,
                    msg:data.msg
                })
            }
        })
        .catch((err:any) => console.log(err))
}




export const handleFetchTracks = () => (dispatch:Dispatch<any>) =>{
    const token = getToken()
    axios.get('https://devil1321.pythonanywhere.com/files/',{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
        .then(res => {
            dispatch({
                type:ServerTypes.FETCH_TRACK_LIST,
                tracks:[...res.data.files]
            })
        })
        .catch((err:any) => console.log(err))
}

export const handleFetchTrack = (name:string) => (dispatch:Dispatch<any>) =>{
    axios.post('https://devil1321.pythonanywhere.com/file/',{
        params:{
            name:name
        }
    })
        .then(res => {
            dispatch({
                type:ServerTypes.FETCH_TRACK,
                file:res.data
            })
        })
        .catch((err:any) => console.log(err))
}

export const handleUpdateOrAddTrack = (formData:any,url:string,id:number) => (dispatch:Dispatch<any>) =>{
    const token = getToken()
    const form = new FormData()
    form.append('id',String(id))
    form.append('file',formData.file)
    form.append('image',formData.image)
    form.append('title',formData.title)
    form.append('author',formData.author)
    form.append('genres',formData.genres)
    form.append('tags',formData.tags)

    axios.post(`https://devil1321.pythonanywhere.com${url}`,form,{
        headers:{
            'Authorization':`Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
    })
        .then(res => {
            dispatch({
                type:ServerTypes.HANDLE_UPDATE_OR_ADD_TRACK,
                msg:'Track Updated'
            })
        })
        .catch((err:any) => console.log(err))
}
export const handleRemoveTrack = (id:number) => (dispatch:Dispatch<any>) =>{
    const token = getToken()
    axios.post(`https://devil1321.pythonanywhere.com/delete-track/` + id,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
        .then(res => {
            dispatch({
                type:ServerTypes.HANDLE_UPDATE_OR_ADD_TRACK,
                msg:'Track Deleted'
            })
        })
        .catch((err:any) => console.log(err))
}
export const handleCheckout = (cart:any) => (dispatch:Dispatch<any>) =>{
    const token = getToken()
    axios.post(`https://devil1321.pythonanywhere.com/create-checkout-session/`,cart,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
        .then(res => {
            dispatch({
                type:ServerTypes.HANDLE_CHECKOUT_SESSION,
            })
        })
        .catch((err:any) => console.log(err))
}


