
import createtokenandsavecookie from "../jwt/generatetoken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
export const signup = async (req, res) => {
    const { fullname, email, password, confirmpassword } = req.body;
    try {
        if (password != confirmpassword) {
            return res.status(400).json({ error: " wrong password" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "uers already exist" });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const newuser = await new User({
            fullname,
            email,
            password:hashpassword,
            
        });
        newuser.save();
        if (newuser) {
            createtokenandsavecookie(newuser._id, res);
            res.status(200).json({ message: "user created successfully", newuser });
        }
    } catch (error) {
        console.log(error);
    }
}
export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
       
        if (!user ) {
            return res.status(400).json({ error: "invalid credentials" });
        }
         const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error:"invalid credentials"});
        }
        createtokenandsavecookie(user._id, res)
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        })



    } catch (error) {
        console.log(error);
    }
}
export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "user logged out successfully" });
    } catch (error) {
        console.log(error);
    }
}
export const alluser=async(req,res)=>{
    try{
        const loggedinuser=req.user._id;
      const alluser=await User.find({_id :{$ne:loggedinuser},}).select("-password");
      res.status(201).json(alluser);
    }
    catch(error){
      console.log("error: in alluser"+error);
    }
}