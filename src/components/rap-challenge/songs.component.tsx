import React,{useState,useEffect} from 'react'
import src from '../../media/favst gibbs - ztb.mp3'

interface Song{
    misto:string;
    audio:string;
    umelec:string;
    song:string;
}

const Songs = () => {

  const [songs,setSongs] = useState<Song[]>([])

  const makeSongs = () =>{
    let tempSongs:Song[] = []
    for(let i = 0; i < 30; i++){
        tempSongs.push({
            misto:`#${i}`,
            audio:src,
            umelec:'McArty',
            song:'Rozmluva',
        })
    }
    setSongs(tempSongs)
  }

  useEffect(()=>{
    makeSongs()
  },[])

  return (
    <div className='rap-challenge__songs'>
      <div className="rap-challenge__songs-header">
        <p>Místo</p>
        <p>Audio</p>
        <p>Umělec</p>
        <p>Song</p>
      </div>
      <div className="rap-challenge__songs-tracks">
        {songs.map(s => {
            return(
                <div className="rap-challenge__songs-track">
                    <p>{s.misto}</p>
                    <audio controls src={s.audio}></audio>
                    <p>{s.umelec}</p>
                    <p>{s.song}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Songs
