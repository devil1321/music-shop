import React,{ useState,useEffect}from 'react'
import * as ServerActions from '../APIController/action-creators/server.action-creators'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
const useMessage = (msg:string) => {

    const [message,setMessage] = useState<string>('')
    const dispatch = useDispatch()
    const serverActions = bindActionCreators(ServerActions, dispatch)

    useEffect(()=>{
        
        setMessage(msg as string)
        setTimeout(() => {
            setMessage('')
            serverActions.handleMessage('')
        }, 4000);
    },[msg])

  return [message,setMessage]
}

export default useMessage
