import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js";
import JWT from 'jsonwebtoken'

export const registerController =async (req,res)=>{
    try {
        const{name,email,password,phone,address,role}=req.body
        //validation
        if(!name){
            return res.send({
                error:"Name not defined"
            })
        }
        if(!email){
            return res.send({
                error:"Email not defined"
            })
        }
        if(!password){
            return res.send({
                error:"Password not defined"
            })
        }
        if(!phone){
            return res.send({
                error:"Phone number not defined"
            })
        }
        if(!address){
            return res.send({
                error:"Address not defined"
            })
        }
        //check user
        //existing user
        const existingUser=await userModels.findOne({email})
        if(existingUser){
            return res.status(200).send({
                error:'Already Register please login'
            })
        }
        //register user
        const hashedPassword=await hashPassword(password);
        //save
        const user=await new userModels({
            name,email,password:hashedPassword,phone,address,role
        }).save() 
        res.status(201).send({
            success:true,
            message:"User registered successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in registration",
            error
        })
    }
};
//login Controller
export const loginController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        //validation
        if(!email||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        const user=await userModels.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        //token
        const token=await JWT.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
              name:user.name,  
              email:user.email,
              phone:user.phone,
              address:user.address
            },
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}
//test controller
export const testController=(req,res)=>{
    try {
        res.send("Protected Routes")
    } catch (error) {
        res.send({
            error
        })
    }
}