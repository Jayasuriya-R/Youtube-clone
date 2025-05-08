import React from 'react'
import VideoCard, { VideoCardAD } from './VideoCard';
import { Link } from 'react-router-dom';


const VideoContainer = ({video}) => {

  const videos = video?.items || video || [];
  return (
    <div className='flex flex-wrap justify-center'>
      {videos.map((x)=>{
        const videoId = x.id.videoId || x.id;
        return (
          <Link key={videoId} to={"/watch?v=" + videoId}>
            <VideoCard info={x} />
          </Link>
        );
      })}
    </div>
  )
}

export default VideoContainer
