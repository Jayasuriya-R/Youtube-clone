import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className='col-span-10 pt-[2%] pl-[1%]'>  
    <ButtonList/>
    <VideoContainer/>
    
    </div>
  )
}

export default MainContainer
