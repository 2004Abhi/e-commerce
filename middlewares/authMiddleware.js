import JWT from "jsonwebtoken"
import userModels from "../models/userModels.js";

//base middleware to decode jwt
export const requireSignIn =async(req,res,next)=>{
    try {
        const decode=await JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        console.log(error)
    }
}
//admin access
export const isAdmin =async(req,res,next)=>{
    try {
        const user=await userModels.findById(req.user._id)
        if(user.role!== "admin"){
            return res.status(401).send({
                success:false,
                message:'unauthorized access'
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
    }
}