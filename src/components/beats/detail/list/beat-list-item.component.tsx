import { GatsbyImage, IGatsbyImageData,StaticImage } from 'gatsby-plugin-image'
import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import * as PlayerActions from '../../../../APIController/action-creators/player.action-creators'
import * as CartActions from '../../../../APIController/action-creators/cart.action-creators'
import { bindActionCreators } from 'redux'  
import { State } from '../../../../APIController/reducers/root.reducer'
import { CartItem } from '../../../../APIController/interfaces'
import useInCart from '../../../../hooks/useInCart'


interface ItemProps{
    item:CartItem
    isActive:boolean;
    index:number;
    handleMakeActive:(index:number) => void
}

const Item:React.FC<ItemProps> = ({isActive,handleMakeActive,index,item}) => {

    const { id,quantity, image,title,price,price_id,genres,tags,source } = item

    const [bpm,setBpm] = useState<number>(0)
    const [isLoad,setIsLoad] = useState<boolean>(false)
    const [audio,setAudio] = useState<any>()
    const [duration,setDuration] = useState<number>()

    const dispatch = useDispatch()
    const playerActions = bindActionCreators(PlayerActions,dispatch)
    const cartActions = bindActionCreators(CartActions,dispatch)
    const { tracks } = useSelector((state:State) => state.server)
    const { src } = useSelector((state:State) => state.player)
    const { cart } = useSelector((state:State) => state.cart)

    const [isInCart,setIsInCart] = useInCart(id)
   

    function _base64ToArrayBuffer(base64:any) {
      var binary_string = window.atob(base64.slice(23,base64.length));
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
  }

    const createBpm = async (source:string) =>{
      if(source?.length > 0){
        const arrayBuffer = _base64ToArrayBuffer(source)
        const audioCtx = new AudioContext()
        const songBuffer = await audioCtx.decodeAudioData(arrayBuffer) as AudioBuffer
        prepare(songBuffer)
      }
    }

    function prepare(buffer:AudioBuffer) {
        var offlineContext = new OfflineAudioContext(1, buffer?.length, buffer?.sampleRate);
        var source = offlineContext.createBufferSource();
        source.buffer = buffer;
        var filter = offlineContext.createBiquadFilter();
        filter.type = "lowpass";
        source.connect(filter);
        filter.connect(offlineContext.destination);
        source.start(0);
        offlineContext.startRendering();
        offlineContext.oncomplete = function(e) {
          process(e);
        };
      }
      
      function process(e:any) {
        var filteredBuffer = e.renderedBuffer;
        //If you want to analyze both channels, use the other channel later
        var data = filteredBuffer.getChannelData(0);
        var max = arrayMax(data);
        var min = arrayMin(data);
        var threshold = min + (max - min) * 0.98;
        var peaks = getPeaksAtThreshold(data, threshold);
        var intervalCounts = countIntervalsBetweenNearbyPeaks(peaks);
        var tempoCounts = groupNeighborsByTempo(intervalCounts);
        tempoCounts.sort(function(a, b) {
          return b?.count - a?.count;
        });
        if (tempoCounts.length) {
           let length = 0
           let tempo = 0
           tempoCounts.forEach(t =>{
            tempo += t.tempo * t.count
            length += t.count
        })
        setBpm(Number((tempo / length).toFixed(0)));
        }
      }
      
      // http://tech.beatport.com/2014/web-audio/beat-detection-using-web-audio/
      function getPeaksAtThreshold(data:Float32Array, threshold:number) {
        var peaksArray = [];
        var length = data.length;
        for (var i = 0; i < length;) {
          if (data[i] > threshold) {
            peaksArray.push(i);
            // Skip forward ~ 1/4s to get past this peak.
            i += 1;
          }
          i++;
        }
        return peaksArray;
      }
      
      function countIntervalsBetweenNearbyPeaks(peaks:number[]) {
        var intervalCounts:Array<{interval:number,count:number}> = [];
        peaks.forEach(function(peak, index) {
          for (var i = 0; i < 10; i++) {
            var interval = peaks[index + i] - peak;
            var foundInterval = intervalCounts.some(function(intervalCount) {
              if (intervalCount.interval === interval) return intervalCount.count++;
            });
            //Additional checks to avoid infinite loops in later processing
            if (!isNaN(interval) && interval !== 0 && !foundInterval) {
              intervalCounts.push({
                interval: interval,
                count: 1
              });
            }
          }
        });
        return intervalCounts;
      }
      
      function groupNeighborsByTempo(intervalCounts:Array<{interval:number,count:number}>) {
        var tempoCounts:any[] = [];
        intervalCounts.forEach(function(intervalCount) {
          //Convert an interval to tempo
          var theoreticalTempo = 60 / (intervalCount.interval / 44100);
          theoreticalTempo = Math.round(theoreticalTempo);
          if (theoreticalTempo === 0) {
            return;
          }
          // Adjust the tempo to fit within the 90-180 BPM range
          while (theoreticalTempo < 90) theoreticalTempo *= 2;
          while (theoreticalTempo > 180) theoreticalTempo /= 2;
      
          var foundTempo = tempoCounts.some(function(tempoCount) {
            if (tempoCount.tempo === theoreticalTempo) return tempoCount.count += intervalCount.count;
          });
          if (!foundTempo) {
            tempoCounts.push({
              tempo: theoreticalTempo,
              count: intervalCount.count
            });
          }
        });
        return tempoCounts;
      }

      function arrayMin(arr:Float32Array) {
        var len = arr.length,
          min = Infinity;
        while (len--) {
          if (arr[len] < min) {
            min = arr[len];
          }
        }
        return min;
      }
      
      function arrayMax(arr:Float32Array) {
        var len = arr.length,
          max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      }

useEffect(()=>{
  if(!isLoad){
    if(typeof window !== 'undefined'){
        setAudio(new Audio())
        setIsLoad(true)
      }
    }
    if(audio){
      audio.src = source
      audio.addEventListener('loadedmetadata',()=>{
        setDuration(Number((audio.duration / 100).toFixed(2)))
      })
    }
    createBpm(source as string)
},[isLoad,tracks,src])

  return (
   <div className='beats__beat-item'
        onClick={()=>{
          playerActions.handleCurrent({id,quantity, image,title,price,price_id,genres,tags})
        }}>
        <div className="beats__beat-item-image">
            {image && <img src={image} alt="beat-img" />}
        </div>
        <h3>{title}</h3>
        <p className='beats__beat-item-time'>{duration}s</p>
        <p>{bpm} BPM</p>
        <div className="beats__beat-item-tags">
            {tags?.map((tag:string) => <p key={tag}>{tag}</p>)}
        </div>
        <div className="beats__beat-item-controls">

        <div className="beats__beat-item-play">
          {isActive
             ? <i onClick={(e)=>{
                playerActions.handleIsPlay(false)
                handleMakeActive(index)
              }} className="fa fa-pause fa-2x"></i>
             : <i onClick={(e)=>{
                playerActions.handleIsPlay(true)
                playerActions.handleSrc(source as string)
                handleMakeActive(index)
              }} className="fa fa-play fa-2x"></i>
            }
        </div>
        <div className="beats__beat-item-controls">
              <div className='beats__beat-item-icon'>
                <i className="fa fa-share"></i>
              </div>
              <div className='beats__beat-item-icon'>
                <i className="fa fa-download"></i>
              </div>
              <div className='beats__beat-item-icon'>
                <p>{price}$</p>
              </div>
              <button onClick={()=>cartActions.handleAddToCart(quantity,item,cart)}><i className="fa fa-shopping-cart"></i>{!isInCart ? 'Add To Cart' : 'In Cart'}</button>
        </div>
      </div>
    </div>
  )
}

export default Item
