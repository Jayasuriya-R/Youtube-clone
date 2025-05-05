import React from 'react'
import youtubeApiFetch from '../hooks/youtubeApiFetch'
import VideoCard, { VideoCardAD } from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  youtubeApiFetch();

 const video = useSelector(store => store.videoData?.video)
 console.log(video)
 if (video == null)return null;
  return (
    <div className='flex flex-wrap justify-center'>
      {video.items.map((x)=>{
        return <Link key={x.id} to={"/watch?v="+x.id}> <VideoCard  info={x}/></Link>
      })}
      
    </div>
  )
}

export default VideoContainer
