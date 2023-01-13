import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData  } from "gatsby-plugin-image"
import { PricingPageImages } from "../interfaces"
import { useDynamicImage } from "../hooks/useImage"


interface Props_404 {
  data: PricingPageImages
}

const NotFoundPage: React.FC<Props_404> = ({data}) => {
  const images = data.allImageSharp.edges

  return (
   <div className="page-404">
     <div className="not-found">
     <GatsbyImage image={useDynamicImage({images,name:'404.webp'}) as IGatsbyImageData} alt="404-pic" />
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


export default NotFoundPage

