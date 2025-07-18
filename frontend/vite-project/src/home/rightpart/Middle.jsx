import React from 'react'
import Visual from './Visual'
import Getmessage from '../../context/Getmessage'
import Loading from '../../components/loading';


function middle() {
    const {loading,messages}=Getmessage();
    console.log(messages);
    return (
        <div className=' h-[78%] overflow-auto no-scrollbar '>
         {loading?(<Loading/>):(messages.length>0 && messages.map((message)=>(
            <Visual key={message._id} message={message} />
         )))}
         {!loading && messages.length===0 && (
             <div className="flex justify-center items-center h-full">
          <p className="text-gray-400 text-lg">Say hi 👋 to start a conversation</p>
            </div>
         )}    
       


        </div>
    )
}

export default middle