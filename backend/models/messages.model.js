import mongoose from "mongoose";
 const messageSchema=new mongoose.Schema({
    SenderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    ReceiverID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
   
 },
 {timestamps:true})
 const Message=mongoose.model("Message",messageSchema);
 export default Message;