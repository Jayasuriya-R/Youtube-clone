import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle,title,thumbnails} = snippet
  return (
    <div className='p-4 m-2 w-80 font-bold shadow-lg rounded-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='video'/>
      <h1>{title}</h1>
      <div className='flex justify-between font-medium'>
      <p>{channelTitle}</p>
      <p>{statistics.viewCount}</p>
      </div>
    </div>
  )
}

export default VideoCard
