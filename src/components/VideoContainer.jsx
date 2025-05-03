import React from 'react'
import youtubeApiFetch from '../hooks/youtubeApiFetch'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

  youtubeApiFetch();

 const video = useSelector(store => store.videoData?.video)
 if (video == null)return null;
  return (
    <div className='flex flex-wrap justify-center'>
      {video.items.map((x)=>{
        return <VideoCard key={x.id} info={x}/>
      })}
      
    </div>
  )
}

export default VideoContainer
