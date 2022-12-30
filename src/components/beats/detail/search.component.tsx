import React from 'react'

const Search = () => {

  const handleActive = (e:any) =>{
    const credItems = document.querySelectorAll('.beat__detail-cred-item')
    credItems.forEach(credItem => credItem.classList.remove('beats__detail-active'))
    e.target.classList.add('beats__detail-active')

  }

  return (
    <div className='beats__detail-search'>
      <h3>FoscoAlma</h3>
      <form action="" className="beats__detail-form">
        <div className="beats__detail-form-field">
            <input type="text" />
            <i className="fa fa-search"></i>
        </div>
      </form>
      <div className="beats__detail-group">
        <div onClick={(e:any)=>handleActive(e)} className="beats__detail-cart beat__detail-cred-item  beats__detail-active">
            <i className="fa fa-shopping-cart"></i>
            <p>Cart</p>
        </div>
        <div onClick={(e:any)=>handleActive(e)} className="beats__detail-credentials beat__detail-cred-item">Login</div>
      </div>
    </div>
  )
}

export default Search
