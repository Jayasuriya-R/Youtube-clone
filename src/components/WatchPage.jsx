import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  
  const video = useSelector(store => store.videoData?.video)
  const searchText = useSelector(store => store.sideBar?.searchText)
  const searchData = useSelector(store => store.videoData?.searchVideo)

  if (!video)return null;

  const dataSource = searchText ? searchData : video;
  const filteredData = dataSource?.items?.filter((i) => i.id.videoId === videoId || i.id === videoId);
  const videoDetails = filteredData?.[0];
  

  
   
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="col-span-10 ml-[50px] mt-[100px]">
    <div className="mt-4 flex">
      <div>
      <iframe
        width="900"
        height="510"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
     
    </div>
    <div className="w-full">
    <LiveChat/>
    </div>
    </div>
    <div className=" font-extrabold py-2 px-1 w-[56rem]"> 
    <h1>{videoDetails?.snippet?.title }</h1>
    <div className="flex justify-between my-2 font-bold">
    <h1 className="border p-2 bg-gray-200 border-gray-100 rounded-lg">  {videoDetails?.snippet?.channelTitle}</h1>
    <p className="border p-2 bg-gray-200 border-gray-100 rounded-lg">{videoDetails?.statistics?.viewCount
              ? `${(videoDetails.statistics.viewCount / 1000).toFixed(1)}k views`
              : "N/A"
    }</p>
    </div>
    </div>
    
    
    <CommentsContainer />
    </div>
  );
};

export default WatchPage;
