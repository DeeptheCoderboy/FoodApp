import db from "@/utils/db";
import Users from "@/models/Users";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default async function handler(req,res){
    const jwtSecret = process.env.JWT_SECRET;

    let success=false;
    if(req.method==="POST"){
        await db.connect();
        const{email,password}=req.body;
        try{
            let user= await Users.findOne({email});
            if(!user){
                return res.status(400).json({success,error:"Try logging in with correct email"})
            }
            const pwdCompare=await bcrypt.compare(password,user.password)
            if(!pwdCompare){
                return res.status(400).json({success,error:"Try logging in with correct Password"})
            }

            const data={
                user:{
                   id:user["_id"]
                }
               }
  const authToken= jwt.sign(data,jwtSecret);
  const isAdmin=user.isAdmin;
  success=true;
  
  res.json({success:success,authToken:authToken,isAdmin});



        }catch(error){
            console.log(error.message)
              res.send("Server error");
        }
    }

}