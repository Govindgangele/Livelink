import React from 'react'
import useConversation from '../../zustand/setselector.js'

function Users({user}) {
  const selectedConversation = useConversation((state) => state.selectedConversation);
const setSelectedConversation = useConversation((state) => state.setSelectedConversation)
  const isSelected=selectedConversation?._id===user._id;
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-600":""}`} onClick={()=>setSelectedConversation(user)}>
      <div className='flex bg-gray-900 m-2 rounded-2xl p-2'>
        <div className="avatar ">
          <div className="relative w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='rounded-full' />

            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 border-1 rounded-full"></span>
          </div>
        </div>
        <div className='px-2'>
          <h1>{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Users