import { Link, graphql,navigate } from 'gatsby'
import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as ServerActions from '../APIController/action-creators/server.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../APIController/reducers/root.reducer'

interface LoginProps {
    data: {
        allFile:{
            nodes:{
              publicURL:string;  
            }[]
        }
    }
  }

const Login:React.FC<LoginProps> = ({data}) => {

  const image = data.allFile.nodes[0].publicURL
  
  const { user} = useSelector((state:State) => state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions,dispatch)

  useEffect(()=>{
    if(!user){
      serverActions.handleInit()
    }
    if(user){
        navigate('/')
    }
  },[user])

  return (
    <div className='container'>
       <form className="cred" method="POST" onSubmit={(e:any) => serverActions.handleSignUp(e)}>
            <div className="cred__inner-form">
                <img  src={image} alt="login-pic" />
                <div className="cred__field">
                    <label>Username |</label>    
                    <input type="text" name="username" />
                </div>
                <div className="cred__field">
                    <label>Email |</label>    
                    <input type="email" name="email" />
                </div>
                <div className="cred__field">
                    <label>Password |</label>    
                    <input type="password" name="password_1" />
                </div>
                <div className="cred__field">
                    <label>Password |</label>
                    <input type="password" name="password_2" />
                </div>
                <Link to="/login">Login</Link>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export const query = graphql`
query MyQuery {
    allFile(
      filter: {extension: {in: "svg"}, name: {}, publicURL: {regex: "/sign-up.svg/gi"}}
    ) {
      nodes {
        publicURL
      }
    }
  }
  `


export default Login
