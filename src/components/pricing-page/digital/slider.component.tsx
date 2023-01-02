import React, { useState,useEffect, SetStateAction } from 'react'

interface SliderProps{ 
  min:number, 
  max: number 
  label:string;
  setValue?:(val:number) => any;
}

const Slider:React.FC<SliderProps> = ({min,max,label,setValue}) => {

  const [ val , setVal ] = useState<number>(Number((max / 2).toFixed(0)))

  useEffect(()=>{
    setValue && setValue(val) 
  },[val])

  return (
    <div className="pricing__digital-slider">
      <label htmlFor="">{label} {val}:</label>
      <input type="range" name="" id="" value={val} min={min} max={max} onChange={(e:any)=>setVal(e.target.value)} />
    </div>
  )
}

export default Slider
