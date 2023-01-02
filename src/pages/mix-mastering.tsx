import React from 'react'
import Global from '../components/global/components'
import Pricing from '../components/pricing-page/components'
import MixMastering from '../components/mix-mastering/components'
import { graphql } from 'gatsby'
import { PricingPageImages } from '../interfaces'

interface MixPageProps {
  data: PricingPageImages
}

const MixPage:React.FC<MixPageProps> = ({data}) => {
  const images = data.allImageSharp.edges
  return (
    <Global.Layout title="Mix & Mastering" className='mix-mastering'>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      <main>

        <div className="mix-mastering__intro-section">
          <div className="mix-mastering__intro">
            <Global.Title html="Online Song <b>Mix & Mastering</b>" />
            <p>Do you want your song to sound professionall? Well, then the best for you would be a high quality digital mix and mastering from a person who has many years of experience.</p>
            <p>And you're lucky, because it's me! Fill in and submit the form and I'll be back with you. The only thing that divides you from what you want and need is this blank form!</p>
          </div>
        </div>

        <div className="mix-mastering__info-section">
          <MixMastering.Info.Info title="How does it work?" />
        </div>

        <div className="mix-mastering__form-section">
          <MixMastering.Form title="Write to me <b>Your idea</b>" price={19} />
        </div>

        <div className="mix-mastering__introduce-section">
          <Global.Title html="Let me <b>introduce</b> myself" />
          <div className="pricing__info-content">
            <Pricing.Info.Introduce images={images} />
            <Pricing.Info.Form />
          </div>
        </div>

        <div className="mix-mastering__count-section">
          <div className="pricing__count-group">
            <Pricing.Count text="years of experience" number={15} />
            <Pricing.Count text="realized projects" number={100} />
            <Pricing.Count text="mastered songs" number={1000} />
            <Pricing.Count text="composed beats" number={1500} />
          </div>

        <div className="mix-mastering__sing-up-section">
          <div className="pricing__sing-up">
            <Global.Title html="<b>Sign up</b> and get discount" />
            <Pricing.SignUp />
          </div>
        </div>

      </div>
      </main>
      
    </Global.Layout>
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
  export default MixPage