import React from 'react'

const Shimmer = () => {
  const n = 10;
  const arr = []
  for(let i=0;i<n;i++){
    arr.push(i)
  }
  return (
    <div className='mt-[100px]'>
      <div className='flex justify-center mt-[3%]'>
        <button className='w-20 h-10 py-2 px-5  mb-3 mx-[1%] border-gray-200 rounded-lg bg-gray-100'></button>
        <button className='w-20 h-10 py-2 px-5  mb-3 mx-[1%] border-gray-200 rounded-lg bg-gray-100'></button>
        <button className='w-20 h-10 py-2 px-5  mb-3 mx-[1%] border-gray-200 rounded-lg bg-gray-100'></button>
        <button className='w-20 h-10 py-2 px-5  mb-3 mx-[1%] border-gray-200 rounded-lg bg-gray-100'></button>
        <button className='w-20 h-10 py-2 px-5  mb-3 mx-[1%] border-gray-200 rounded-lg bg-gray-100'></button>
        <button className='w-20 h-10 py-2 px-5  mb-3 mx-[1%] border-gray-200 rounded-lg bg-gray-100'></button>

      </div>
    <div className='flex justify-center flex-wrap mt-10'>
    { arr.map(() => <div className='w-[350px] h-60 m-3  border-gray-200 border rounded-lg bg-gray-100'></div>)
    }
      
    </div>
    </div>
  )
}

export default Shimmer
