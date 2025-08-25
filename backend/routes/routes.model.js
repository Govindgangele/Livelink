import {alluser, login, logout, signup} from "../controller/user.controller.js";
import express from "express"
import Secureroute from "../middleware/Secureroute.js";
const router =express.Router();
router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/alluser",Secureroute,alluser);
export default router;