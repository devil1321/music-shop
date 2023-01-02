import React from 'react'
import Item from './info-item.component';

interface InfoProps{
    title:string;
}

const Info:React.FC<InfoProps> = ({title}) => {
  return (
    <div className='mix-mastering__info'>
      <h2>{title}</h2>
      <div className="mix-mastering__info-item-wrapper">
        <div className="mix-mastering__info-first-item">
          <Item title="1/ I need your audio track stems" text="First, send me the sound material - the individual tracks of your musical project. Tracks must be free of effects. Together with the material, you can also send a demo (mixdown) that should demonstrate your idea of using different effects on different parts of the song (delay, flanger, chorus, equalizer, etc.). At the same time, you can send me a reference song (or beat) so I know where you want the overall sound to be directed." />
        </div>
        <div className="mix-mastering__info-items-wrapper">
          <Item title="2/ Free sample" text="I will send you a free demo of professional digital mix and mastering on your song within a few business days." />
          <Item title="3/ Your feedback" text="Based on your feedback, which you write to me through comments on the project in your account, I will edit the song so that you are 100% satisfied." />
          <Item title="4/ Payment" text="Once I properly finish my work on your song, including all your comments and requests, you will pay the agreed amount in advance to my bank account." />
          <Item title="5/ Delivery of the final song" text="As soon as I see a payment on my bank account, I will send you a finished song in standard CD quality WAV 44.1kHz / 16bit." />
        </div>
      </div>
    </div>
  )
}

export default Info
