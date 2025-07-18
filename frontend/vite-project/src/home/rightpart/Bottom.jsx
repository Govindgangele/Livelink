import React from 'react'
import { IoSend } from "react-icons/io5";

function Bottom() {
  return (
    <div className='justify-center flex'>
      <div className=' m-3'>
        <input type="text" placeholder="Type here" className="input w-150 border-none outline-none" />
      </div>
      <div className='text-4xl pt-2 p-1 w-14 h-14 rounded-full justify-center px-4 hover:bg-black'>
        <IoSend className='' />

      </div>

    </div>
  )
}

export default Bottom