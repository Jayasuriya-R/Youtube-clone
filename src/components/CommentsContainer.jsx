import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import commentData from "../utils/commentData";
import {Youtube_API_Key} from "../utils/constants"



const CommentsContainer = () => {
  const [showComment, setShowComment] = useState(false)
  const commentAPI = async () =>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=vLTc-j6krUo&key=${Youtube_API_Key}`);
    const json = await data.json()
    console.log(json)
  }
  useEffect(()=>{
    commentAPI();
  },[])
  
  return (
    <div className="mt-4 px-3">
      <h1 className="font-bold mb-3 cursor-pointer text-2xl" onClick={()=> setShowComment(!showComment)}>Comments ...</h1>
      {showComment &&
      <CommentsList comments={commentData} />}
    </div>
  );
};

export default CommentsContainer;
