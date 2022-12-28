const jwt = require("jsonwebtoken");
const dotenv=require('dotenv')
dotenv.config();

const fetchUser=(req,res,next)=>{
    const token =req.header('auth-token')
    if(!token){
        return res.status(401).json("Please authenticate using Valid Token")
    }

    const data =jwt.verify(token,process.env.JWT_SEC);
    req.user=data.user;
    next();

}

// User+Admin

const fetchAndAuthenticate=(req,res,next)=>{
    fetchUser(req,res,()=>{
        if(req.params.id === req.user.id || req.user.isAdmin){
        
            next()
        }
        else{
            res.status(401).json("Not Authenticated");
        }
    })
}

// Admin
const fetchAdmin=(req,res,next)=>{
    fetchUser(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            res.status(401).json("Not Allowed")
        }
    })

}

module.exports={fetchUser,fetchAndAuthenticate,fetchAdmin}