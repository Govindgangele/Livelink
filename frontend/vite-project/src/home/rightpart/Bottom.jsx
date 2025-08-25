import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import Sendmessage from '../../context/Sendmessage';

function Bottom() {
  const [message,setmessage]=useState("");
  const {loading,sendmessage}=Sendmessage();
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent form reload
    
    await sendmessage(message);
    setmessage("");
  };
  return (
    <form onSubmit={handleSubmit}>

    <div className='justify-center flex'>
      <div className=' m-3'>
        <input type="text" value={message} onChange={(e)=>setmessage(e.target.value)} placeholder="Type here" className="input w-150 border-none outline-none" />
      </div>
      <button
          type="submit"
          disabled={loading}
          className='text-4xl pt-2 p-1 w-14 h-14 rounded-full justify-center px-4 hover:bg-black flex items-center'
        >
          <IoSend />
        </button>

    </div>
    </form>
  )
}

export default Bottom