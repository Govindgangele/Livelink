import React from 'react'


function Chatuser() {

  return (
    <div>
      <div className='flex bg-gray-700  text-white p-2 justify-center'>
        <div className="avatar  ">
          <div className="relative w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='rounded-full' />

            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 border-1 rounded-full"></span>
          </div>
        </div>
        <div className='px-2'>
          <h1 className='font-bold'>Govind gangele</h1>
          <span>offline</span>
        </div>
      </div>
    </div>
  )
}

export default Chatuser