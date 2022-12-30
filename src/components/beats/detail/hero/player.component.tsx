import React,{ useState, useEffect, useRef, MutableRefObject, useMemo, useCallback } from 'react'
import media from "../../../../media/favst gibbs - ztb.mp3"
import media2 from "../../../../media/Gibbs x Avi - 30 stopni.mp3"
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

const Player:React.FC<{image:IGatsbyImageData,placeholder:IGatsbyImageData}> = ({image,placeholder}) => {

  const [isPlay,setIsPlay] = useState<boolean>(false)
  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [beat,setBeat] = useState<Uint8Array>(new Uint8Array())
  const [src,setSrc] = useState<any>(media)

  const [audioCtx,setAudioCtx] = useState<AudioContext>(new AudioContext())
  const [analyser,setAnalyser] = useState<any>(null)
  const [bufferLength,setBufferLength] = useState<number>(0)
  const [audio,setAudio] = useState<any>(new Audio)
  const [audioDuration,setAudioDuration] = useState<number>(0)

  const canvasRefCircle = useRef() as MutableRefObject<HTMLCanvasElement>
  const canvasRefBars = useRef() as MutableRefObject<HTMLCanvasElement>
  
   

  const connectAudio = () =>{
    if(typeof window !== 'undefined'){
        audio.pause()
        audio.remove()
        const audioEl = new Audio()
        audioEl.preload="metadata"
        audioEl.src = src
        const audioCtx = new AudioContext()
        const tempAnalyser = audioCtx.createAnalyser();
        tempAnalyser.fftSize = 256
        const analyserSource = audioCtx.createMediaElementSource(audioEl)
        analyserSource.connect(tempAnalyser)
        tempAnalyser.connect(audioCtx.destination);
        const bufferLength = tempAnalyser.frequencyBinCount;
        setAudio(audioEl)
        setAnalyser(tempAnalyser)
        setAudioCtx(audioCtx)
        setBeat(new Uint8Array(bufferLength))
        setBufferLength(bufferLength)

        canvasRefBars.current.width = canvasRefBars.current.clientWidth
        canvasRefBars.current.height = canvasRefBars.current.clientHeight
  }
}


const handlePlay = ()=>{
  if(!isPlay){
    const play = audio.play()
    audioCtx.resume()
    setIsPlay(true)
  }else if(isPlay){
    audio.pause()
    setIsPlay(false)
  }
}

  const handleAnimateCircle = () =>{
    const angle = (audio.currentTime / audio.duration / 100) * 360
    const ctx = canvasRefCircle.current.getContext('2d')!
    ctx.clearRect(0,0,canvasRefCircle.current.width,canvasRefCircle.current.height)
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#474747'
    ctx.lineWidth = 5
    if(!isPlay){
      ctx.arc(canvasRefCircle.current.width / 2,canvasRefCircle.current.height / 2, 75,10 * Math.PI,angle * Math.PI)
      ctx.stroke()
    }
    ctx.strokeStyle = '#474747'
    ctx.beginPath()
    ctx.arc(canvasRefCircle.current.width / 2,canvasRefCircle.current.height / 2,70,0,Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = '#000000'
    ctx.stroke()
    ctx.fill()
    requestAnimationFrame(handleAnimateCircle)
  }

  const handleAnimateBars = async () =>{
   
    let x = 0
    analyser.getByteFrequencyData(beat)
    const ctx = canvasRefBars.current.getContext('2d')!
    ctx.clearRect(0, 0, canvasRefBars.current.width, canvasRefBars.current.height);
    const barWidth = canvasRefBars.current.width / bufferLength
    for (let i = 0; i < bufferLength; i++) {
        let barHeight = beat[i];
        ctx.fillStyle = "white";
        ctx.fillRect(x, canvasRefBars.current.height - barHeight + canvasRefBars.current.height / 2, barWidth, barHeight);
        x += barWidth + 5
    }

    
    requestAnimationFrame(handleAnimateBars);
  }

  const handleLoad = () =>{
    if(isLoad){
      connectAudio()
      handleAnimateCircle()
    }else{
      setSrc(media)
      setIsLoad(true)
    }
  }
 

  useEffect(()=>{
    handleLoad()
  },[isLoad,src])

  return (
    <div className='beats__player'>
      <canvas ref={canvasRefBars} className='beats__player-canvas-beats-bars'></canvas>
      <div className="beats__player-bg">
        <div className="beats__player-overlay"></div>
        {image && <GatsbyImage image={image} alt="player-bg" />}
      </div>
      <div className="beats__player-content">
        <div className="beats__player-audio">
          {isPlay 
            ? <i className="fa-4x fa fa-pause"></i>
            : <i  className="fa-4x fa fa-play"></i>
          }
        </div>s
        <canvas onClick={()=>{
              handlePlay()
              setTimeout(() => {
                handleAnimateBars()
                handleAnimateCircle()
              }, 100);
              }} className='beats__player-canvas-play' ref={canvasRefCircle} width={200} height={200}></canvas>
        <div className="beats__player-info">
          <div className="beats__player-title">
            <h3>SOMETIMES Guitar Pop Beat</h3>
            <i className="fa fa-share"></i>
          </div>
          <div className="beats__player-genres">
            <div className='beats__player-content-title'>Genre</div>
            <div className="beats__player-genre beats__player-content-item">POP</div>
            <div className="beats__player-genre beats__player-content-item">POP / HIPHOP</div>
          </div>
          <div className="beats__player-tags">
            <div className="beats__player-tag beats__player-content-item">#GUITAR</div>
            <div className="beats__player-tag beats__player-content-item">#POP</div>
            <div className="beats__player-tag beats__player-content-item">#GUITAR BEAT</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
