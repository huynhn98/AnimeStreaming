import React, { useEffect, useState } from 'react'
import { getTrailer } from '../api/axios'
import ReactPlayer from 'react-player'

const Billboard = ({id}) => {
    const [anime, setAnime] = useState([])
    var content = ''
    const getData = async () => {
        try {
            const response = await getTrailer()
            const data = response
            setAnime(data)
        } catch (error) {
          console.log(error.response)
        }
      }
      useEffect(() => {
        getData();
        
    
    }, []);
    
    content =
    <div className='billboard'>
    <ReactPlayer 
    className='video' 
    playing={true} 
    controls={false} 
    url={`https://www.youtube-nocookie.com/embed/${anime}`} 
    volume={0} 
    height={"56.25vw"} 
    width={"100%"} 
    muted={true} 
    loop={true}
    config={{
      youtube: {
        playerVars: { showinfo: 0 }
      },
    }}
    
    />
</div>
  return (
    <>{content}</>
    
  )
}

export default Billboard