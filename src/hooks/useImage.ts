import React,{ useState,useEffect } from 'react'
import { IGatsbyImageData , getImage} from 'gatsby-plugin-image'

interface UseImageProps{
    images:any;
    name:string;
}

export const useDynamicImage = ({images,name}:UseImageProps) =>{
    const [image,setImage] = useState<IGatsbyImageData>()


    const findImage = (images:any,name:string) =>{
        const image = images.find((i:any) => i.node.fluid?.originalName === name)
        const validImage = getImage(image?.node.gatsbyImageData)
        setImage(validImage)
    }

    useEffect(()=>{
        findImage(images,name)
    },[name])

    return image
}