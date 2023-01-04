import React, { useState, useEffect } from 'react'


const useTitle = (html:string) => {
     
  const [htmlState,setHTML] = useState<string>(html)

  const handleBolds = () =>{
    const regex = /<a>(.*?)<\/a>/gi
    const matches = html.match(regex) as string[]
    let tempHTML = htmlState
    matches?.forEach((m:string) =>{
        const htmlRegex = /(?<=<a>)(.*?)(?=<\/a>)/gi
        const innerText = m.match(htmlRegex) as string[]
        if(innerText?.length > 0){
          tempHTML = tempHTML.replaceAll(m.trim(),`<a href="#" class="f-link">${innerText[0]}</a>`)
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
