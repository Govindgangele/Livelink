import {createContext, useContext, useEffect, useState} from "react"
import { useAuth } from "./Authprovider";
import io from "socket.io-client";


 const Socketcontext=createContext();
export const useSocketcontext=()=>{
    return useContext(Socketcontext);
};
export const SocketProvider=({children})=>{
    const [socket,setsocket]=useState(null)
    const [auth]=useAuth();
    const [online,setonline]=useState([]);
    useEffect(()=>{
        if(auth){
            const socket=io("http://localhost:3000",{
                query:{
                    userid:auth.user._id
                },
            });
            setsocket(socket);
            socket.on("getOnlineuser",(users)=>{
                setonline(users);
            })
            return()=>socket.close();
        }
        else{
            if(socket){
                socket.close();
                setsocket(null);
            }
        }
    },[auth]);
    return(
        <Socketcontext.Provider value={{socket,online}}>
        {children}
        </Socketcontext.Provider>
    )
}