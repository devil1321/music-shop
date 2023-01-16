import React,{ useState, useEffect, useRef, MutableRefObject, useMemo, useCallback } from 'react'
import { globalHistory } from '@reach/router'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useSelector, useDispatch } from 'react-redux'
import * as PlayerActions from '../../../../APIController/action-creators/player.action-creators'
import * as ServerActions from '../../../../APIController/action-creators/server.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../../../../APIController/reducers/root.reducer'
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'
const Player:React.FC<{image:IGatsbyImageData}> = ({image}) => {

  const { isPlay, src, current:{ title, genres , tags} } = useSelector((state:State) => state.player)
  const { user, tracks } = useSelector((state:State) => state.server)
  const dispatch = useDispatch()
  const playerActions = bindActionCreators(PlayerActions,dispatch)
  const serverActions = bindActionCreators(ServerActions,dispatch)

  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [isPlaySet,setIsPlaySet] = useState<boolean>(false)
  const [isFetched,setIsFetched] = useState<boolean>(false)
  const [beat,setBeat] = useState<Uint8Array>(new Uint8Array())
  const [tempSrc,setTempSrc] = useState<string>('')

  const [audioCtx,setAudioCtx] = useState<any>()
  const [bufferLength,setBufferLength] = useState<number>(0)

  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>
  const canvasRefCircle = useRef() as MutableRefObject<HTMLCanvasElement>
  const canvasRefBars = useRef() as MutableRefObject<HTMLCanvasElement>
  const analyserRef = useRef() as MutableRefObject<any>
   

  const connectAudio = () =>{
    if(typeof window !== 'undefined'){
      if(tempSrc !== src){
        setTempSrc(src)
        if(audioRef?.current && !audioRef.current.paused){
          audioRef.current.pause()
          audioRef.current.remove()
        }
        // fix
        const audioEl = new Audio()
        if(src.length > 0){
          audioEl.src = src
        }
        audioEl.preload = 'metadata'
        audioRef.current = audioEl
        const audioCtx = new AudioContext()
        const tempAnalyser = audioCtx.createAnalyser();
        tempAnalyser.fftSize = 256
        const analyserSource = audioCtx.createMediaElementSource(audioEl)
        analyserSource.connect(tempAnalyser)
        tempAnalyser.connect(audioCtx.destination);
        const bufferLength = tempAnalyser.frequencyBinCount;
        analyserRef.current = tempAnalyser
        setAudioCtx(audioCtx)
        setBeat(new Uint8Array(bufferLength))
        setBufferLength(bufferLength)

        canvasRefBars.current.width = canvasRefBars.current.clientWidth
        canvasRefBars.current.height = canvasRefBars.current.clientHeight
      }

  }
}


const handlePlay = ()=>{
  if(isPlay === true && audioRef.current?.paused){
    audioCtx?.resume()
    const play = audioRef.current?.play()
  }else if(isPlay === false && !audioRef.current?.paused){
    audioRef.current?.pause()
  }
}

  const handleAnimateCircle = () =>{
    const angle = (audioRef?.current?.currentTime / audioRef?.current?.duration / 100) * 360
    const ctx = canvasRefCircle.current?.getContext('2d')!
    if(ctx){
      ctx.clearRect(0,0,canvasRefCircle.current.width,canvasRefCircle.current.height)
      ctx.lineCap = 'round'
      ctx.strokeStyle = '#474747'
      ctx.lineWidth = 5
      if(isPlay){
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
  }

  const handleAnimateBars = () =>{
   
    let x = 0
    analyserRef.current?.getByteFrequencyData(beat)
    const ctx = canvasRefBars.current?.getContext('2d')!
    if(ctx){
      ctx.clearRect(0, 0, canvasRefBars.current.width, canvasRefBars.current.height);
      const barWidth = canvasRefBars.current.width / bufferLength
      for (let i = 0; i < bufferLength; i++) {
        let barHeight = beat[i];
        ctx.fillStyle = "white";
        ctx.fillRect(x, canvasRefBars.current.height - barHeight + canvasRefBars.current.height / 2, barWidth, barHeight);
        x += barWidth + 5
      }
    }
    requestAnimationFrame(handleAnimateBars)
  }
    function cancelAllAnimationFrames(){
      var id = window.requestAnimationFrame(function(){});
      while(id--){
        window.cancelAnimationFrame(id);
      }
   }





  useEffect(()=>{
    audioCtx?.resume()
    if(isLoad){
      if(isFetched && !isPlaySet){
        playerActions.handleSrc(tracks[0]?.base64)
        playerActions.handleCurrent({qunatity:1,price_id:tracks[0].price_id,id:tracks[0].id,title:tracks[0].title,genres:tracks[0].genres.split(','),tags:tracks[0].tags.split(',')})
        setIsPlaySet(true)
      }
      if(isPlay){  
        connectAudio()
        cancelAllAnimationFrames()
      }
      if(isPlaySet){
        handlePlay()
      }
      handleAnimateBars()
      handleAnimateCircle()
    }else{
      setIsLoad(true)
      serverActions.handleFetchTracks()
      setIsFetched(true)
    }
    return globalHistory.listen(({ action }) => {
      if(user){ 
        if (action === 'PUSH') {
          audioRef.current?.pause()
        }
      }
    })
  },[isPlay,tracks,src,tempSrc])

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
        </div>
        <canvas onClick={()=>{
              playerActions.handleIsPlay(!isPlay)
              }} className='beats__player-canvas-play' ref={canvasRefCircle} width={200} height={200}></canvas>
        <div className="beats__player-info">
          <div className="beats__player-title">
            <h3>{title}</h3>
            <i className="fa fa-share"></i>
          </div>
          <div className="beats__player-genres">
            <div className='beats__player-content-title'>Genre</div>
            {genres.map((g:string) => <div key={g} className="beats__player-genre beats__player-content-item">{g}</div>)}
          </div>
          <div className="beats__player-tags">
            {tags.map((t:string) => <div key={t} className="beats__player-tag beats__player-content-item">{t}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
