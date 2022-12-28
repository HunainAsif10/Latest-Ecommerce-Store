const express=require('express');
const { fetchAndAuthenticate, fetchAdmin } = require('../middleware/fetchUser');
const router=express.Router()
const User=require('../models/User')
const bcrypt = require("bcrypt");


// updateUser
router.put('/updateUser/:id',fetchAndAuthenticate,async(req,res)=>{
   try {
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password=hash;
    }
    const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).json({updatedUser})
   } catch (error) {

       res.status(500).json("Internal Server Error")
   } 

})

// deleteUser
router.delete('/deleteUser/:id',fetchAdmin,async(req,res)=>{
    const deletedUser=await User.findByIdAndDelete(req.params.id)
    res.status(200).json({deletedUser})
})

// getUser
router.get('/getUser/:id',fetchAndAuthenticate,async(req,res)=>{
    const user=await User.findById(req.params.id).select("-password")
    res.status(200).json({user});
})
// getAllUsers

router.get('/getAllUsers',fetchAdmin,async(req,res)=>{
    const users=await User.find();
    res.status(200).json({users});
})

// getUserStats


module.exports=router;