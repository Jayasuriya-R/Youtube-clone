import React from 'react'
import Comment from './Comment'

const commnetData = [
    {
        name:"Surya",
        text:"video is good",
        reply:[]
    }
]

const CommentsContainer = () => {
  return (
    <div className='mt-4 px-3'>
        <h1 className='font-bold mb-3 text-2xl'>Comments :</h1>
    <Comment  data={commnetData}/>
    </div>
  )
}

export default CommentsContainer
