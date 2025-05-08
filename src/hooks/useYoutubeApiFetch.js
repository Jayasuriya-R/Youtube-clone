import { useEffect } from "react";
import { Youtube_Video_API } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addVideoData } from "../utils/videoDataSlice";

const useYoutubeApiFetch = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getVideos = async () => {
        try {
          const videoData = await fetch(Youtube_Video_API);
          const jsonData = await videoData.json();
          dispatch(addVideoData(jsonData)); // Ensure you're dispatching only items
        } catch (err) {
          console.error("Error fetching default videos:", err);
        }
      };
  
      getVideos(); // ✅ Now the function is defined before use
    }, [dispatch]);
  };
 

export default useYoutubeApiFetch;