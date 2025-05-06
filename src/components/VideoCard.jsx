import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-4 m-2 w-80 h-76 font-bold text-[15px] shadow-lg rounded-lg  hover:bg-gray-100">
      <img
        className="rounded-lg mb-2"
        src={thumbnails.medium.url}
        alt="video"
      />
      <h1>{title}</h1>
      <div className="flex justify-between flex-wrap font-medium py-1 px-1">
        <p>{channelTitle}</p>
        <p>{statistics.viewCount}</p>
      </div>
    </div>
  );
};
//Higher order component
export const VideoCardAD = ({ info }) => {
  console.log("advideo");
  return (
    <div className="p-2 m-2 border-4 border-red-600">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
