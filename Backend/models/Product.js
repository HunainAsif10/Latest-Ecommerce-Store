const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    color:{
        type:Array
    },
    size:{
        type:Array
    }

},{timestamps:true})

module.exports=mongoose.model('Product',ProductSchema)