const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({

    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    products:[
        {
         productId:{
            type:String,
            required:true
         },
         quantity:{
            type:Number,
            default:1,
            required:true
         }
        }
    ],
    address:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"pending",
        required:true
    }
    

},{timestamps:true})

module.exports=mongoose.model('Order',OrderSchema)