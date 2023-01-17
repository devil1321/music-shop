import React,{useEffect} from 'react'
import { navigate } from 'gatsby'
import Nav from './nav.component'
import Navbar from './navbar.component'
import '../../styles/styles.scss'
import '../../font-awesome/css/all.css'
import Footer from './footer/components'
import { useDispatch,useSelector } from 'react-redux'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { bindActionCreators } from 'redux'  
import{ State } from '../../APIController/reducers/root.reducer'
import CartSidebar from './cart-sidebar.component'
interface MetaTag{
    name?:string;
    property?:string;
    content:string;
}

interface LayoutProps {
    children:any;
    title:string;
    className?:string;
    meta?:MetaTag[];
}



const Layout:React.FC<LayoutProps> = ({children,title,className,meta}) => {

  const dispatch = useDispatch()
  const serverActions = bindActionCreators(ServerActions,dispatch)
  const { user,tracks,msg } = useSelector((state:State) => state.server)

  useEffect(()=>{
    if(localStorage.getItem('access_token') && !user){
      serverActions.handleInit()
      console.log(tracks,msg)
    }else{
      if(!user){
        navigate('/login')
      }
    }
    
  },[user,tracks])
  return (
      <div className='container'>
        {/* <Head>
          <title>Shop | {title}</title>
          {meta?.map((m:MetaTag,i:number) => <meta key={i} name={m.name} content={m.content} />)}
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ubp4mtr.css"></link>
        </Head> */}
        <CartSidebar />
        <Nav />
        <Navbar />
        <div className={className}>
          {children}
        </div>
        <Footer.Footer />
    </div>
  )
}

export default Layout