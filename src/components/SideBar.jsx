import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const SideBar = () => {
  const showSideBar = useSelector((store) => store.sideBar.sideBarStatus);
  const siderBarMenu = ["Home","Shorts","Live","Subscription","History","Playlist","Watch Later","Movies"]
  return (
    <div>
      {showSideBar && (
        <div className="fixed mt-[90px] p-5 bg-white shadow-lg w-40 h-screen col-span-2">
          <ul>
            {siderBarMenu.map((x,index)=>{
             return x =="Home"? <Link key={index} to="/"> <li  className="mb-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg font-medium">{x}</li></Link>:
             <li key={index} className="mb-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg font-medium">{x}</li>
            })}
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default SideBar;
