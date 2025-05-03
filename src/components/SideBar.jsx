import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.sideBar.sideBarStatus);
  const siderBarMenu = ["Home","Shorts","Live","Subscription","History","Playlist","Watch Later","Movies"]
  return (
    <div>
      {showSideBar && (
        <div className="p-5 shadow-lg w-40 h-screen">
          <ul>
            {siderBarMenu.map((x,index)=>{
             return    <li className="mb-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg font-medium">{x}</li>
            })}
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default SideBar;
