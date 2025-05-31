import React from 'react'

function Button({name,bg}) {
  return (
    <div>
      <button className={`py-2 px-4  mb-3 mx-2 font-medium font-serif rounded-lg hover:bg-gray-300 ${bg} bg-gray-100 cursor-pointer`}>{name}</button>
    </div>
  )
}

export default Button
