import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import useConversation from '../zustand/setselector';
function Getmessage() {
    const [loading,setloading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();
    useEffect(() => {

        const getmessage = async () => {
            setloading(true);
              if(selectedConversation && selectedConversation._id){
            try {
             

                   const response = await axios.get(`/api/message/get/${selectedConversation._id}`
                )
                setMessages(response.data);
                setloading(false);
            } catch (error) {
                console.log("error: in Getmessage"+error);
            }
        }
        };
        getmessage();
    }, [selectedConversation,setMessages]);
    return {loading,messages};
}

export default Getmessage