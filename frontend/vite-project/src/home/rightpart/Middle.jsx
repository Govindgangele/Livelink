import React, { useEffect, useRef } from 'react'
import Visual from './Visual'
import useGetmessage from '../../context/useGetmessage'
import Loading from '../../components/loading';

import useGetsocketmessage from '../../context/useGetsocketmessage.js';



function Middle() {
    const {  loading, messages, setMessages } = useGetmessage();
    useGetsocketmessage();

    console.log(messages);
    const lastMessage = useRef();

    useEffect(() => {
        
            if (lastMessage.current) {
                lastMessage.current.scrollIntoView({ behavior: "smooth" });
            }
        
    }, [messages]);
    console.log(Array.isArray(messages));
    return (
        <div className=' h-[78%] overflow-auto no-scrollbar '>
            {loading ? (<Loading />) : Array.isArray(messages) && messages.length > 0 ? (messages.map((message, index) => (
                <div
                    key={ message.id || message.createdAt }
                    ref={index === messages.length - 1 ? lastMessage : null}
                >
                    <Visual message={message} />
                </div>
            ))):
             (
                <div className="flex justify-center items-center h-full">
                    <p className="text-gray-400 text-lg">Say hi 👋 to start a conversation</p>
                </div>
            )
            }

        
            



        </div>
    )
}

export default Middle