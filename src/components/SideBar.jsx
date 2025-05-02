import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const showSideBar = useSelector(store => store.sideBar.sideBarStatus)
  return (
    <div>
  {
    showSideBar && (
    <div className='p-5 shadow-lg w-40'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
        <h1 className='font-bold pt-5'>You {">"}</h1>
      <ul>
        <li>History</li>
        <li>Playlist</li>
        <li>Watch Later</li>
      </ul>
      <h1 className='font-bold pt-5'>Trending</h1>
      <ul>
        <li>Shopping</li>
        <li>News</li>
        <li>Courses</li>
      </ul>
    </div>)
}
</div>
  )
}

export default SideBar
