import React from 'react'
import useConversation from '../../zustand/setselector'
import { useSocketcontext } from '../../context/Socketcontext';
import { useAuth } from '../../context/Authprovider';


function Chatuser() {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  if (!selectedConversation) {
    return <div className="text-white p-4">Select a user to start chat</div>;
  }
  const [auth] = useAuth();
  const { socket, online } = useSocketcontext();
  const isonline = online.includes(selectedConversation._id);
  console.log(isonline, auth.user._id);
  return (
    <div>
      <div className='flex bg-gray-700  text-white p-2 justify-center'>
        <div className={`avatar ${isonline ? "online" : " "}`}>
          <div className="relative w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='rounded-full' />

            {isonline && (
              <span className="absolute  top-1 right-1 w-2.5 h-2.5 bg-green-500 border-1 rounded-full"></span>
            )}
          </div>
        </div>
        <div className='px-2'>
          <h1 className='font-bold'>{selectedConversation.fullname || "no user selected"}</h1>
          <span>{`${isonline ? "online" : "offline"}`}</span>
        </div>
      </div>
    </div>
  )
}

export default Chatuser