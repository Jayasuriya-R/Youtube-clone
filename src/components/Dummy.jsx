import React, { useRef, useState } from 'react'

const Dummy = () => {
    const [isDark,setIsDark] = useState(false)
    let ref = useRef(0)
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className={`w-8/12 h-60 m-4 border flex justify-center items-center font-bold border-black ${isDark ? "bg-black text-cyan-500" : "bg-gray-200"}`}>
      Hello
      <h1>{ref.current}</h1>
    </div>
    
    <button className='border border-black p-2' onClick={()=>setIsDark(!isDark)}>Toggle</button>
    <button className='border border-black p-2' onClick={()=> ref.current+=1}>click +</button>
    <button className='border border-black p-2' onClick={()=> ref.current-=1}>click -</button>
    </div>
  )
}

export default Dummy
