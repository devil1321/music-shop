import React from 'react'
import Nav from './nav.component'
import Navbar from './navbar.component'
import '../../styles/styles.scss'
import '../../font-awesome/css/all.css'
import Footer from './footer/components'

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
  return (
      <div>
        {/* <Head>
          <title>Shop | {title}</title>
          {meta?.map((m:MetaTag,i:number) => <meta key={i} name={m.name} content={m.content} />)}
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ubp4mtr.css"></link>
        </Head> */}

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