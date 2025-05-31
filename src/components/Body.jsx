import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {
  // const sideBar = useSelector((store) => store.sideBar.sideBarStatus);
  return (
    <div className='grid grid-flow-col'> 
      <SideBar/>
      
      <Outlet/>
        
    </div>
  )
}

export default Body
