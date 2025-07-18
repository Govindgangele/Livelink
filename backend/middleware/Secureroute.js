import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const Secureroute=async(req,res,next)=>{
   try {
     const token =await req.cookies.jwt;

    

    if (!token) {
      return res.status(400).json({ error: "No token, authentication denied" });
    }
    const decode= jwt.verify(token,process.env.JWT_TOKEN);
    if(!decode){
       return res.status(400).json({error:"Invalid token"});
    }
    const user=await User.findById(decode.userId).select("-password");
    if(!user){
        return res.status(400).json({error:"User not found"});
    }
    req.user=user;
    next();
   } catch (error) {
    console.log("error in securerout"+error);
   } 
}
export default Secureroute;