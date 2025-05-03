import { useEffect } from "react";
import { Youtube_Video_API } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addVideoData } from "../utils/videoDataSlice";

const youtubeApiFetch =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async ()=>{
        const videoData = await fetch(Youtube_Video_API);
        const jsonData = await videoData.json();
        dispatch(addVideoData(jsonData))
    }
}
 

export default youtubeApiFetch;