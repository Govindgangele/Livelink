import React from 'react'
import useConversation from '../../zustand/setselector.js'
import { useSocketcontext } from '../../context/Socketcontext.jsx';

function Users({ user }) {
  const selectedConversation = useConversation((state) => state.selectedConversation);
  const setSelectedConversation = useConversation((state) => state.setSelectedConversation)
  const isSelected = selectedConversation?._id === user._id;
  const { socket, online } = useSocketcontext();
  const isonline = online.includes(user._id);
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-600" : ""}`} onClick={() => setSelectedConversation(user)}>
      <div className='flex bg-gray-900 m-2 rounded-2xl p-2 z-0'>
        <div className={`avatar ${isonline ? "online" : "offline"}`}>
          <div className="relative w-14 rounded-full ">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='rounded-full z-0 relative ' />

            {isonline && (
              <span className="absolute z-10 top-1 right-1 w-2.5 h-2.5 bg-green-500 border-1 rounded-full"></span>
            )}
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