import React,{useEffect} from 'react'
import Nav from './nav.component'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { navigate } from 'gatsby'
import { State } from '../../APIController/reducers/root.reducer'

const Layout:React.FC<any> = ({children}) => {

  const dispatch = useDispatch()
  const { user } = useSelector((state:State) => state.server)
  const serverActions = bindActionCreators(ServerActions,dispatch)

  useEffect(()=>{
    if(localStorage.getItem('access_token') && !user){
      serverActions.handleInit()
    }else{
      if(!user){
        navigate('/login')
      }
    }
  },[])
    
  return (
    <div className='admin'>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
