import React, { useState,useEffect } from 'react'

interface SliderProps{ 
  min:number, 
  max: number 
  label:string;
}

const Slider:React.FC<SliderProps> = ({min,max,label}) => {

  const [ val , setVal ] = useState<number>(Number((max / 2).toFixed(0)))

  return (
    <div className="pricing__digital-slider">
      <label htmlFor="">{label} {val}:</label>
      <input type="range" name="" id="" value={val} min={min} max={max} onChange={(e:any)=>setVal(e.target.value)} />
    </div>
  )
}

export default Slider
