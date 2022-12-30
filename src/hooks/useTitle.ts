import React, { useState, useEffect } from 'react'


const useTitle = (html:string) => {
     
  const [htmlState,setHTML] = useState<string>(html)

  const handleBolds = () =>{
    const regex = /<b>(.*?)<\/b>/gi
    const matches = html.match(regex) as string[]
    let tempHTML = htmlState
    matches?.forEach((m:string) =>{
        const htmlRegex = /(?<=<b>)(.*?)(?=<\/b>)/gi
        const innerText = m.match(htmlRegex) as string[]
        if(innerText?.length > 0){
          tempHTML = tempHTML.replaceAll(m.trim(),`<b class="f-bold">${innerText[0]}</b>`)
        }
      })
      setHTML(tempHTML)
    }
    
    useEffect(() => {
      handleBolds()
    },[])

  return [htmlState,setHTML]
}

export default useTitle
