
import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";
import Secureroute from "../middleware/Secureroute.js";
export const sendmessage=async(req,res)=>{
 try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;
    let conversation =await Conversation.findOne(
        {Member:{$all:[senderId,receiverId]}},
    )
    if(!conversation){
        conversation=new Conversation({
            Member:[senderId,receiverId],
        })
    }
   const newMessage = new Message({
  SenderID: senderId,
  ReceiverID: receiverId,
  message: message,
});
    await newMessage.save();
    
    if(newMessage){
        conversation.Message.push(newMessage._id);
    }
    
    await Promise.all([conversation.save(),newMessage.save()]);
    res.status(201).json({
        message:"message sent successfully",
        newMessage,
    })
 } catch (error) {
    console.log("error: in message.controller"+error);
 }
};
export const getmessage=async(req,res)=>{
    try {
    const {id:receiverId}=req.params;
    const senderId=req.user._id;
    let conversation =await Conversation.findOne(
        {Member:{$all:[senderId,receiverId]}},
    ).populate("Message");
    if(!conversation){
        return res.status(201).json([]);
    }
    console.log("this is conversation",conversation.Message);
    const message=conversation.Message;
    
    res.status(201).json(message);
    } catch (error) {
        console.log(" error: in getmessage"+error);
    }
}