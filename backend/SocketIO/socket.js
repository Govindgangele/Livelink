import {Server} from "socket.io";
import http from "http"
import express from "express";


const app = express()

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
    }
})
const users={};
export const getreceiverid=(receiverid)=>{
  return users[receiverid];
}
io.on("connection",(socket)=>{
  console.log("a user connected",socket.id);
  const userId=socket.handshake.query.userid
  if(userId){
    users[userId]=socket.id;
    console.log("id",users);
  }
  io.emit("getOnlineuser",Object.keys(users));
  socket.on("disconnect",()=>{
      console.log("a user disconnected",socket.id);
      delete users[userId];
      io.emit("getOnlineuser",Object.keys(users));
  })
})
export {app,io,server}