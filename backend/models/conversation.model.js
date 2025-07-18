import mongoose from "mongoose";

// Do NOT import the full model for refs — use the model name string instead
const conversationSchema = new mongoose.Schema({
  Member: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // use the model name string here
    },
  ],
  Message: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // use the model name string here
      default: [],
    },
  ],
}, { timestamps: true });

// Correct model registration
const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
