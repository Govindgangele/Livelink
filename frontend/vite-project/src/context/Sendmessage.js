import React from 'react'
import { useState,useEffect } from 'react';
import useConversation from '../zustand/setselector.js';
import axios from 'axios';
function Sendmessage() {
    const [loading,setloading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();
    

       const sendmessage = async (messageText) => {
  setloading(true);
  try {
    const response = await axios.post(
      `/api/message/send/${selectedConversation._id}`,
      { message: messageText },
      { withCredentials: true }
    );
     // Get the new message from the response
  const newMsg = response.data.newMessage;

  // Append the new message to your messages array
  setMessages([...messages,newMsg]);
    setloading(false);
    
  } catch (error) {
    console.error("Error sending message:", error);
    setMessages([]);
    throw error;
  } finally {
    setloading(false);
  }
};
        
    
    return {loading,sendmessage};
}


export default Sendmessage