const express=require('express');
const { fetchUser, fetchAdmin, fetchAndAuthenticate } = require('../middleware/fetchUser');
const router=express.Router()
const Order=require('../models/Order')
// createOrder
router.post('/createOrder',fetchUser,async(req,res)=>{
    try {
        const order=await Order({userId:req.user.id,...req.body})
    const newOrder=await order.save()
    res.status(200).json({newOrder})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
     

})
// deleteOrder
router.delete('/deleteOrder/:id',fetchAdmin,async(req,res)=>{
    try {
        const order=await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({order})
        
    } catch (error) {
        res.status(500).json("Internal Server Error")
        
    }
})
// upDateOrder
router.put('/updateOrder/:id',fetchAdmin,async(req,res)=>{
    try {
        const updatedOrder=await Order.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json({updatedOrder})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
  
})
// getOrder
router.get('/getOrder/:id',fetchAndAuthenticate,async(req,res)=>{
    try {

        const order=await Order.findById(req.params.id)
        res.status(200).json({order});
        
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
})
// getAllOrders

router.get('/getAllOrders',fetchAdmin,async(req,res)=>{
    try {
        const order=await Order.find()
        res.status(200).json({order})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
 
})

module.exports=router;