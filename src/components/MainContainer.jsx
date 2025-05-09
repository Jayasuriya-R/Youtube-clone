import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Youtube_API_Key } from '../utils/constants'
import useYoutubeApiFetch from '../hooks/useYoutubeApiFetch'
import Shimmer from './Shimmer'
import { useState } from 'react'
import { addSearchVideo } from '../utils/videoDataSlice'

const MainContainer = () => {
  const searchKeyWord = useSelector((store) => store.sideBar.searchText);
  const defaultVideos = useSelector((store) => store.videoData?.video);
  const searchResult  = useSelector((store) => store.videoData?.searchVideo)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useYoutubeApiFetch(); // ✅ Always called — internally it checks searchKeyWord is falsy

  useEffect(() => {
    const searchRes = async () => {
      if (!searchKeyWord) {
       dispatch(addSearchVideo(null));
        return;
      }

      setLoading(true);
      try {
        const data = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchKeyWord}&type=video&maxResults=10&key=${Youtube_API_Key}`
        );
        const json = await data.json();
        dispatch(addSearchVideo(json)); 
        console.log(json)
      } catch (err) {
        console.error('YouTube API error:', err);
      } finally {
        setLoading(false);
      }
    };

    searchRes();
  }, [searchKeyWord]);

  if (loading || (!defaultVideos && !searchResult)) return <Shimmer />;

  return (
    <div className="col-span-10 pt-[2%] pl-[1%]">
      <ButtonList />
      <VideoContainer video={searchKeyWord ? searchResult : defaultVideos} />
    </div>
  );
};

export default MainContainer
