import { IGatsbyImageData } from "gatsby-plugin-image";

export interface PricingPageImages {
    allImageSharp:{
        edges:{
          node:PricingPageImagesNodes[]
        }
      }
}

export interface PricingPageImagesNodes {
    id:string,
    gatsbyImageData:IGatsbyImageData,
    fluid:{
        originalName:string;
    }
}