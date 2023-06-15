import  {comparePassword, hashPassword}  from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const registerController=async(req,res)=>{
    try {
        const {username,email,password}=req.body

        if(!username){
            return res.send({error:'Username is Required'})
        }
        if(!email){
            return res.send({error:'Email is Required'})
        }
        if(!password){
            return res.send({error:'Password is Required'})
        }
        

        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                message:'Already Register Please Login'
            })
        }

        const hashedPassword=await hashPassword(password)
        const user=new userModel({username,email,password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user,
        })
    } catch (error) {
        console.log("Error",error)
        res.status(500).send({
            success:false,
            message:'Error in Registaration',
            error:error,
        })
    }
};

export const loginController=async(req ,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not Registered"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"2d",


        })
        res.status(200).send({
            success:true,
            message:"Login Successfully",
            user:{
                username:user.username,
                email:user.email,
                
            },
            token,
        })
    } catch (error) {
        console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in Login",
        error
    })
    
    }
}


export const testController =(req,res)=>{
    res.send("protected Route")
}