import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import userroute from "./routes/routes.model.js"
import cookieParser from "cookie-parser";
import messageroute from "./routes/messageroute.js"
import { app, server } from "./SocketIO/socket.js";
dotenv.config();
const PORT=process.env.PORT;
const MONGODB_URL=process.env.MONGODB_URL;
app.use(express.json());
app.use(cookieParser());
app.use(cors());
try {
    mongoose.connect(MONGODB_URL)
    .then(console.log("database is connected"))
} catch (error) {
    console.log(error)
}
app.use("/api/user",userroute);
app.use("/api/message",messageroute);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})