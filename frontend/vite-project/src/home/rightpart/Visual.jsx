import React from 'react'

function Visual({message}) {
   const authuser = JSON.parse(localStorage.getItem("chatAPP")) ;
  
    const itsme = (message.SenderID) === (authuser?.user?._id);
     const itsme1=message.ReceiverID===authuser?.user?._id;
    let chatname = itsme ? "chat-start" : "chat-end";
    chatname=itsme1? "chat-end":"chat-start";
    const chatcolor = itsme ? "bg-blue-400" : "bg-yellow-400";

    
    return (
        <div>
            <div className='m-5 '>

                <div className={`chat ${chatname}`} >
                    <div className="chat-header">
                        Govind
                        <time className="text-xs opacity-50">2 hours ago</time>
                    </div>
                    <div className={`chat-bubble ${chatcolor}`}>{message.message}</div>
                    <div className="chat-footer opacity-50">Seen</div>
                </div>
                
            </div>
        </div>
    )
}

export default Visual