import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { Youtube_API_Key } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'

const LiveChat = () => {

    const dispatch = useDispatch();
    const message = useSelector(store=> store.chatData.messages)
    
useEffect(()=>{
const i = setInterval(()=>{
//    api polling
    const messageAPI= async () =>{
        const data = await fetch("https://mocki.io/v1/552c8751-566e-4267-ae90-1f607cb2b71a");
        const json = await data.json();
        // console.log(json)
        dispatch(addMessages(json))
      }
messageAPI()
},2000)


return ()=> clearInterval(i)
},[])

  return (
    <div className='w-10/12 h-[500px] mx-6  p-2 border border-black rounded-lg bg-gray-100 overflow-y-scroll'>
        { message.map((x,index)=><ChatMessage key={index} name={x.name} message={x.message}/>)}
    </div>
  )
}

export default LiveChat
