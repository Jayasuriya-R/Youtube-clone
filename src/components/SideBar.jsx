import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addSearchText } from "../utils/sideBarSlice";

const SideBar = () => {
  const dispatch = useDispatch()
  const showSideBar = useSelector((store) => store.sideBar.sideBarStatus);
  const siderBarMenu = ["🏠 Home","📽️ Shorts","🔴 Live","🛍️ Shopping","🎶 Music","🍿 Movies","🎮 Gaming","📰 News","🏈 Sports","📚 Courses","👗 Fashion & Beauty"]
  return (
    <div>
      {showSideBar && (
        <div className="fixed flex-col justify-between ">
        <div className="flex mt-[90px]  p-5 bg-white shadow-lg w-40 h-screen col-span-2 font-serif">
          <ul >
            {siderBarMenu.map((x,index)=>{
             return x =="🏠 Home"? <Link key={index} to="/"> <li onClick={()=>dispatch(addSearchText(null))} className="mb-3 mt-3 px-2 py-1 cursor-pointer hover:bg-gray-200 rounded-lg font-medium">{x}</li></Link>:
             <li key={index} className="mb-3 py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-lg font-medium" onClick={()=>{dispatch(addSearchText(x))}}>{x}</li>
            })}
          </ul>
          
        </div>
        <div>
          <hr></hr>
          © 2025 Google LLC
        </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
