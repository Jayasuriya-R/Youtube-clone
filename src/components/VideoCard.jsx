import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const sideBarStatus = useSelector(store=> store.sideBar.sideBarStatus)
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
   <div className={`w-[370px] m-2 p-3 rounded-lg mx-3 my-3 cursor-pointer ${!sideBarStatus ? 'transition-transform duration-300 ease-in-out transform hover:scale-105 hover:brightness-110' : ''}`}
>
  <img
    className="w-full h-44 object-cover rounded-lg"
    src={thumbnails?.medium?.url}
    alt="video thumbnail"
  />
  <div className="flex mt-3">
    {/* Placeholder avatar - you can replace with actual channel image if available */}
    <div className="flex flex-col">
      <h2 className="text-sm font-semibold text-black line-clamp-2">
        {title}
      </h2>
      <p className="text-gray-600 text-xs">{channelTitle}</p>
      <p className="text-gray-600 text-xs">
        {statistics?.viewCount ? `${Number(statistics.viewCount).toLocaleString()} views` : ""}
      </p>
    </div>
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
