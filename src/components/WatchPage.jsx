import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="mt-4 col-span-10">
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
  );
};

export default WatchPage;
