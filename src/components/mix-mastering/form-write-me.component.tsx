import { Link } from 'gatsby'
import React, { useState } from 'react'
import Pricing from '../../components/pricing-page/components'
import useTitle from '../../hooks/useTitle'

const Form:React.FC<{title:string,price?:number,withoutSliders?:boolean}> = ({title,price,withoutSliders}) => {

  const [tracks,setTracks] = useState<number>(3)
  const [songs,setSongs] = useState<number>(5)
  const [formatedTitle,setFormatedTitle] = useTitle(title)

  return (
    <div className='mix-mastering__form'>
       <div className="mix-mastering__form-title">
            <i className="fa fa-message fa-2x"></i> 
            <h3 dangerouslySetInnerHTML={{__html:formatedTitle as string}}></h3>
       </div>
      <form action="">
        <div className="mix-mastering__form-field">
            <label htmlFor="">Name</label>
            <input type="text" />
        </div>
        <div className="mix-mastering__form-field">
            <label htmlFor="">E-mail</label>
            <input type="text" />
        </div>
        <div className="mix-mastering__form-field">
            <label htmlFor="">More about project</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
        </div>
        {!withoutSliders 
            && <div className="mix-mastering__form-sliders-wrapper">
                <div className="mix-mastering__form-sliders">
                   <Pricing.Digital.Slider setValue={setTracks} min={1} max={25} />
                   <Pricing.Digital.Slider setValue={setSongs} min={1} max={25} />
                </div>
                <div className="mix-mastering__form-result">
                    {Number(((tracks * price) + (songs * price)).toFixed(2))}$
                </div>
            </div>}
        <div className="mix-mastering__form-field">
            <label htmlFor="">Coupon</label>
            <input type="text" />
        </div>
        <div className="mix-mastering__form-checkbox">
            <input type="checkbox" />
            <label htmlFor="">I agree with <Link to="#">Privacy Policy</Link></label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Form
