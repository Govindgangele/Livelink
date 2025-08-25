import { useEffect } from "react";
import { useSocketcontext } from "./Socketcontext";
import useGetmessage from "./useGetmessage.js";

export default function useGetsocketmessage() {
  const { socket } = useSocketcontext();
  const { loading, messages, setMessages } = useGetmessage();

  useEffect(() => {
    if (!socket) return;
    console.log("ye wala",messages);
    

    socket.on("newmessage",(newMessage)=>{
      setMessages([...messages,newMessage]);
    });

    return () => {
      socket.off("newmessage");
    };
  }, [socket, setMessages]);
}
