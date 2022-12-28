const express=require('express');
const { fetchAdmin } = require('../middleware/fetchUser');
const router=express.Router()
const Product=require('../models/Product')
// createProduct
router.post('/createProduct',fetchAdmin,async(req,res)=>{
    try {
        const product=await Product(req.body);
        const savedProduct=await product.save()
        res.status(200).json({savedProduct})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
   
})
// updateProduct
router.put('/updateProduct/:id',fetchAdmin,async(req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
         res.status(200).json({updatedProduct})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
    
})
// deleteProduct
router.delete('/deleteProduct/:id',fetchAdmin,async(req,res)=>{
    try {
        const deletedProduct=await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({deletedProduct})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
    
})
// getProduct
router.get('/getProduct/:id',async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
        res.status(200).json({product})
        
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
   
})
// getAllProducts
router.get('/getAllProducts',async(req,res)=>{
    try {
        let products=await Product.find()
        res.status(200).json({products})
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
   
})
// getCategories
router.get('/get/:category',async(req,res)=>{
    try {
        let products;
        products=await Product.find({category:{
            $in:[req.params.category]
        }})
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json("Internal Server Error")
        
    }
})
// getSubCAtegories
router.get('/get/:category/:subCategory',async(req,res)=>{
    // console.log(req.params.category,req.params.subCategory)
    let products;
    try {
        products=await Product.aggregate([
            {$match: {$and: [{category: req.params.category}, {subCategory:req.params.subCategory}]}},
        ])
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json("Internal Server Error")
        
    }
})

module.exports=router;