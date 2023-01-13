import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData  } from "gatsby-plugin-image"
import { useDynamicImage } from "../hooks/useImage"
import { PricingPageImages } from "../interfaces"

interface Props_500 {
    data: PricingPageImages
  }

const ServerError: React.FC<Props_500> = ({data}) => {
    
  const images = data.allImageSharp.edges

  return (
   <div className="page-500">
     <div className="server-error">
        <GatsbyImage image={useDynamicImage({images,name:'500.webp'}) as IGatsbyImageData} alt="404-pic" />
    </div>
   </div>
  )
}

export const query = graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: WEBP)
            fluid {
              originalName
            }
          }
        }
      }
    }
  `

export default ServerError


