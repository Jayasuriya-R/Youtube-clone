import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className='py-2 px-5  mb-3 mx-2 font-medium rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button
