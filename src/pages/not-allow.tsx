import React from 'react'
import Admin  from '../components/admin/components'
import Global from '../components/global/components'
const NotAllow = () => {
  return (
    <Admin.Layout>
      <div className="not-allow">
          <Global.Title html='You`re not allowed here. <b>You need to be staff</b>' />
      </div>
    </Admin.Layout>
  )
}

export default NotAllow
