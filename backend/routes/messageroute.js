import express from "express"
import { Router } from "express"
import Secureroute from "../middleware/Secureroute.js";
import { getmessage, sendmessage } from "../controller/message.controller.js";
const router=express.Router();
router.post("/send/:id",Secureroute,sendmessage);
router.get("/get/:id",Secureroute,getmessage);
export default router;