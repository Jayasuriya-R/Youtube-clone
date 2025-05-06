import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const btnItems = ["All","Gaming","Songs","News","Cricket","Live","Cooking","Pupg","IPL","Web series"]
  return (
    <div className='flex justify-center '>
    {btnItems.map((x)=>{
       return <Button key={x} name={x}/>
     })} 
       
    </div>
  )
}

export default ButtonList
