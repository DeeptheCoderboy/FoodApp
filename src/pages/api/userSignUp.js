import bcrypt from "bcryptjs";
import db from "@/utils/db";
import Users from "@/models/Users";
import jwt from "jsonwebtoken";
export default async function handler(req,res){
    const jwtSecret = process.env.JWT_SECRET;
   
    let success=false;
    const salt=await bcrypt.genSalt(10);
    let securepass=await bcrypt.hash(req.body.password,salt);
    if(req.method==="POST"){
        await db.connect();
        try{
            await Users.create({
                name:req.body.name,
                password:securepass,
                email:req.body.email,
                location:req.body.location

            }).then(async(user)=>{
                const data={
                 user:{
                    id:user["_id"]
                 }
                }
  const isAdmin=await user.isAdmin;

   const authToken= jwt.sign(data,jwtSecret);
   success=true
   res.json({success,authToken,isAdmin});
            }
            ).catch((err)=>{
                res.json({err:err.message})
            })
        }catch(err){
            res.json({err:err.message})

        }
        await db.disconnect();

    }
}