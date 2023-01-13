import React,{useEffect} from 'react'
import Global from '../components/global/components'
import { useSelector, useDispatch } from 'react-redux'
import * as ServerActions from '../APIController/action-creators/server.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../APIController/reducers/root.reducer'
import { Link } from 'gatsby'
const Profile = () => {
  
  const { user,person } = useSelector((state:State) => state.server)
  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions,dispatch)

  useEffect(()=>{
    serverActions.handleInitPerson()
  },[])

  return (
    <Global.Layout title="Shop | Profile" className='profile-wrapper'>
        <Global.Title html="Profile" />
        <div className="profile">
        <form action="" className="profile__form">
            <div className="profile__field">
                <label>Username:</label>
                <input type="text" name="username" value={user?.username}/>
            </div>
            <div className="profile__field">
                <label>First Name:</label>
                <input type="text" name="name" value={user?.name}/>
            </div>
            <div className="profile__field">
                <label>Last Name:</label>
                <input type="text" name="last_name" value={user?.last_name}/>
            </div>
            <div className="profile__checkboxes">
                <div className="profile__field-checkbox">
                    <label>Is Staff</label>
                    {user?.is_staff 
                        ? <input type="checkbox" checked/>
                        : <input type="checkbox"/>
                    }
                </div>
                <div className="profile__field-checkbox">
                    <label>Is Active</label>
                    {user?.is_active 
                        ? <input type="checkbox" checked/>
                        : <input type="checkbox"/>
                    }
                </div>
                <div className="profile__field-checkbox">
                    <label>Is Superuser</label>
                    {user?.is_superuser 
                        ? <input type="checkbox" checked/>
                        : <input type="checkbox"/>
                    }
                </div>
            </div>
            <div className="profile__buyed">
                  {user?.buyed?.map((song:any) =>{
                    return(
                        <div className="profile__song">
                            <h3>{song.id}</h3>
                            <h3>{song.title}</h3>
                            <h3>{song.author}</h3>
                        </div>
                        )
                    })} 
            </div>
            <button>Save</button>
            {user?.is_staff && <Link to="/admin" className='profile__admin'>Admin</Link>}
            </form>
        </div>
    </Global.Layout>
  )
}

export default Profile
