import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addSearchText } from '../utils/sideBarSlice'

const ButtonList = () => {
  const dispatch = useDispatch()

  const btnItems = ["All","Gaming","Songs","News","Cricket","Live","Cooking","Pupg","IPL","Web series"]
  return (
    <div className='flex justify-center ' >
    {btnItems.map((x)=>{
       return <div  onClick={()=>dispatch(addSearchText(x==="All"?null:x))}><Button  key={x} name={x}/></div>
     })} 
       
    </div>
  )
}

export default ButtonList
