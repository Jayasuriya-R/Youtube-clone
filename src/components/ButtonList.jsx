import React, { useState } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchText } from '../utils/sideBarSlice'

const ButtonList = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(store => store.sideBar.searchText)
  const btnItems = ["All","Gaming","Songs","News","Cricket","Live","Cooking","Pupg","IPL","Web series"]
  return (
    <div className='flex justify-center '>
    {btnItems.map((x)=>{
       return <div  onClick={()=>{
        dispatch(addSearchText(x==="All"?null:x))
         
       } 
       }><Button  key={x} name={x} bg={searchText === x || x === "All" && searchText=== null ?"bg-gray-800 text-white":''}/></div>
     })} 
       
    </div>
  )
}

export default ButtonList
