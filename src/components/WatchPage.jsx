import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  
  const video = useSelector(store => store.videoData?.video)
  if (!video)return null;

  const movieDetails = video.items.filter((i) => i.id === videoId);

  
   
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="col-span-10">
    <div className="mt-4 ">
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
     
    </div>
    
    <div className=" font-extrabold py-2 px-1 w-[50rem]"> 
    <h1>{movieDetails[0].snippet.title}</h1>
    <div className="flex justify-between my-2 font-bold">
    <h1 className="border p-2 bg-gray-200 border-gray-100 rounded-lg">  {movieDetails[0].snippet.channelTitle}</h1>
    <p className="border p-2 bg-gray-200 border-gray-100 rounded-lg">{movieDetails[0].statistics.viewCount % 1000 
    }k views</p>
    </div>
    </div>
    <CommentsContainer />
    </div>
  );
};

export default WatchPage;
