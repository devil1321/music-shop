import React from 'react'
import Pricing from '../components/pricing-page/components'
import Global from '../components/global/components'
import { Link, graphql } from 'gatsby'
import { useDynamicImage } from '../hooks/useImage'
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { PricingPageImages } from '../interfaces'

interface PricingPageProps {
  data: PricingPageImages
}

const PricingPage: React.FC<PricingPageProps> = ({ data }) => {
  const images = data.allImageSharp.edges
  return (
    <Global.Layout title="Pricing" className='pricing'>

      <div className="pricing__hero-section">
        <Global.Title html="How can I <b>help you</b> with <b>your music</b>?" />
        <div className="pricing__cards">
          <Pricing.Card title="Online Song Mix & Mastering" image={useDynamicImage({ images, name: 'card-1-image.png' }) as IGatsbyImageData} text="Do you want that your song sounds professionally? There's nothing simpler than using a digital mix and mastering of your song or your whole project in the comfort of your own home." />
          <Pricing.Card title="Custom Beats & Type Beats" image={useDynamicImage({ images, name: 'card-2-image.png' }) as IGatsbyImageData} text="Are you betting on familiar beats or would you like to attract listeners with an original instrumental? I've got a pile of beats ready for you, and I'm ready to do the instrumental exactly to your liking!" />
        </div>
      </div>

      <div className="pricing__introduce-section">
        <Global.Title html="Let me <b>introduce</b> myself" />
        <div className="pricing__info-content">
          <Pricing.Info.Introduce images={images} />
          <Pricing.Info.Form />
        </div>
      </div>

      <div className="pricing__count-section">
        <div className="pricing__count-group">
          <Pricing.Count text="years of experience" number={15} />
          <Pricing.Count text="realized projects" number={100} />
          <Pricing.Count text="mastered songs" number={1000} />
          <Pricing.Count text="composed beats" number={1500} />
        </div>
      </div>

      <div className="pricing__digital-section">
        <div className="pricing__digital">
          <Global.Title html="Digital Online <b>Mix And Mastering</b>" />
          <p>Every artist who really means it with his music wants his songs to sound professional. And you are lucky, because one way to do it is the online digital mix and mastering, made by a professional with years of experience, which I am!</p>
          <Pricing.Digital.Price price={29} />
          <div className="pricing__digital-sliders">
            <Pricing.Digital.Slider min={1} max={25} label="Songs" />
            <Pricing.Digital.Slider min={3} max={30} label="Track items" />
          </div>
          <div className="pricing__digital-subheader">
            <h3 className='pricing__digital-subtitle'>Favoruite <b>bundles</b></h3>
            <p className='pricing__digital-subtext'>Choose one of my clients's favorite bundles</p>
          </div>
          <div className="pricing__digital-items">
            <Pricing.Digital.Item title="Basic Single" price={29} songs={1} tracks={5} />
            <Pricing.Digital.Item title="Pro Single" price={79} songs={1} tracks={15} />
            <Pricing.Digital.Item title="Basic EP" price={139} songs={5} tracks={5} />
            <Pricing.Digital.Item title="Pro EP" price={259} songs={5} tracks={10} />
            <Pricing.Digital.Item title="Mixtape" price={359} songs={15} tracks={5} />
            <Pricing.Digital.Item title="Album" price={1199} songs={15} tracks={20} />
          </div>
        </div>
        
        <div className="pricing__custom-beats-section">
          <div className="pricing__custom-beats">
            <Global.Title html="Type Beats & <b>Custom Beats</b>" />
            <p>You can choose from <Link to="#">finished beats</Link> and make an instant purchase, or write me and arrange with me to create a unique beat according to your ideas and requirements. Start by choosing a license type:</p>
            <div className="pricing__custom-beats-large-item-group">
              <Pricing.CustomBeatItem title="Mp3 Lease" price={19} text="mp3 / 320 kbps Audio stream only 250000 streams Beat remains on sale Commercial use" />
              <Pricing.CustomBeatItem title="WAV Lease" price={39} text="mp3 / 320 kbps Audio stream only 250000 streams Beat remains on sale Commercial use" />
              <Pricing.CustomBeatItem title="Premium Lease" price={99} text="WAV / 44.1 kHz / 16 bit Include track stems Audio and video stream 1000000 streams Beat remains on sale Commercial use" />
              <Pricing.CustomBeatItem title="Premium Lease Plus" price={129} text="WAV / 44.1 kHz / 16 bit Include track stems Free mix and mastering Audio and video stream 2000000 streams Beat remains on sale Commercial use" />
              <Pricing.CustomBeatItem title="Unlimited Lease" price={199} text="WAV / 48 kHz / 24 bit Include track stems Audio and video stream Unlimited streams Free arrangements Beat remains on sale Commercial use" />
              <Pricing.CustomBeatItem title="Unlimited Lease Plus" price={249} text="WAV / 48 kHz / 24 bit Include track stems Free mix and mastering Audio and video stream Unlimited streams Free arrangements Beat remains on sale Commercial use" />
            </div>
            <div className="pricing__custom-beats-medium-group">
              <Pricing.CustomBeatItem title="Exclusive" price={299} text="WAV / 48 kHz / 32 bit float Include track stems  Audio and video stream  Exclusive music rights  Unlimited streams Free arrangements  Sharing on my Instagram's stories Commercial use" />
              <Pricing.CustomBeatItem title="Exclusive Plus" price={349} text="WAV / 48 kHz / 32 bit float  Include track stems Free mix and mastering Audio and video stream Exclusive music rights Unlimited streams  Free arrangements Sharing on my Instagram's stories  Commercial use" />
            </div>
            <h3>The difference between licenses</h3>
            <p>The license gives right to the owner to legally use the music covered by the license. The type of license that has the title <b>Lease</b> can exist infinitely many times. That means that several people can buy it at the same time and legally use the beat for their music. (at their own discretion, but under licensing rules). You can monetize it on Spotify, Apple Music, etc.</p>
            <p>But if you want to own and use the beats exclusively for you, meaning no one else can use it, nor buy it, and you also get to use <b>Content ID</b> on it, you will be interested in the license that has the title <b>Exclusive</b>. Basically, you will be granted the exclusive right with this license. You can monetize it on YouTube, Spotify, Apple Music, etc.</p>
          </div>
        </div>

        <div className="pricing__sing-up">
          <Global.Title html="<b>Sign up</b> and get discount" />
          <p>Sign up for a <b>discount of up to 15%</b> on all services and licenses. In addition, you will gain access to your account listing all projects that can be sorted into different workspaces for a better overview. Individual projects have a reporting system that gives you a perfect insight into the working phase of your project. You will also surely appreciate an overview of your payments or the ability to download files related to the project (individual version of the song, instrumental without vocals, radio version, etc.).</p>
          <Pricing.SignUpForm />
          <h3>How to get 15% discount?</h3>
          <p>You will receive the first 5% discount immediately after registration. Then, you can get another 5% by verifying your email address, because it is a key to create a reliable communication channel between me and you. Once we successfully complete the first project that will be properly paid, you will get the final 15% discount.</p>
        </div>

      <div className="pricing__clients-section">
        <div className="pricing__clients">
          <Global.Title html="What do <b>my clients</b> say?" />
          <div className="pricing__clients-say">
            <Pricing.Client image={useDynamicImage({images,name:"profile-pic-1.jpg"}) as IGatsbyImageData} text='"He has always made my songs sound great. In addition, he always went forward to meet my requirements. I can only recommend."' footText='- Refew, rapper'/>
            <Pricing.Client isRight={true} image={useDynamicImage({images,name:"profile-pic-2.jpg"}) as IGatsbyImageData} text='"Thanks for your attitude. You gave me a chance to work with a real professional. Because of you I have bigger motivation to improve myself."' footText='- Albi, rapper'/>
            <Pricing.Client image={useDynamicImage({images,name:"profile-pic-3.jpg"}) as IGatsbyImageData} text='"Fosco Alma Production is trusted and verified service for all audio professionals and enthusiasts, looking for industry ready sound. All projects that we have worked on together were individually prepared and tweaked for our needs. On time delivery, great work ethics and years of pro level experience is combination, that stands out from other audio services. If you are looking for great sound, you found your place."' footText='- Overdue, DJ and studio director'/>
          </div>
        </div>
      </div>

    <div className="pricing__projects-section">
      <div className="pricing__projects">
        <Global.Title html = 'My <b>famous</b> realized projects' />
        <p>How does it work? Check it out!</p>
        <div className="pricing__projects-music-items">
          <Pricing.Projects.MusicItem titleHtml='Project <b>Blakkout</b>' subtitle='4.400.000+ views on YouTube' textHtml='This is how my <b>custom beat</b> sounds' image={useDynamicImage({images,name:"music-item-1.png"}) as IGatsbyImageData}/>
          <Pricing.Projects.MusicItem titleHtml='Project <b>Pod hladinou</b>' subtitle='6.000.000+ views on YouTube' textHtml='This is how my <b>custom beat</b> sounds' image={useDynamicImage({images,name:"music-item-2.png"}) as IGatsbyImageData}/>
          <Pricing.Projects.MusicItem titleHtml='Project <b>Monstrum</b>' subtitle='5.300.000+ views on YouTube' textHtml='This is how my <b>custom beat</b> sounds' image={useDynamicImage({images,name:"music-item-3.png"}) as IGatsbyImageData}/>
        </div>
        <div className="pricing__projects-youtube-items">
          <Pricing.Projects.YoutubeItem html="Final song with my <b>mix and mastering</b>" image={useDynamicImage({images,name:"youtube-item-1.png"}) as IGatsbyImageData} />
          <Pricing.Projects.YoutubeItem html="Final song with my <b>mix and mastering</b>" image={useDynamicImage({images,name:"youtube-item-2.png"}) as IGatsbyImageData} />
          <Pricing.Projects.YoutubeItem html="Final song with my <b>mix and mastering</b>" image={useDynamicImage({images,name:"youtube-item-3.png"}) as IGatsbyImageData} />
        </div>
      </div>
    </div>

    <div className="pricing__faq-section">
        <div className="pricing__faq">
          <Pricing.FaqItem title="FAQ" 
            leftItem_1_title='Why master songs?' 
            leftItem_1_content="Every song has a lot of tracks (drums, instruments, voices, etc.) and each of these tracks should be arranged correctly with properly tuned frequencies and also it shouldn't be too quiet or loud.. Only a well mastered song sounds professional." 
            leftItem_2_title="Master song meaning"
            leftItem_2_content="It is a process of getting rid of unwanted sounds, setting up tuning frequencies, track arrangement, additional special effects, all of this with deep feelings of a skilled person who knows what to do."
            rightItemTitle="How to master a song?"
            rightItemContent="The song should sound as universally as possible to play as well on headphones as in the car or on television. The song should also play loud enough not to sound quiet, so it doesn't vary from other songs by other performers. The vocals should be just loud enough to understand the words. The song should generally sound nice and pure. This is achieved by means of various effects (equalizer, compressor, saturator, reverb, etc.) and fine tuning of volume ratios and stereobase."
          />
        </div>
      </div>

      </div>
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
export default PricingPage