const express=require('express')
const app=express()
const cors = require('cors')
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT
const connectToMongo=require('./db')
connectToMongo();


app.use(cors())
app.use(express.json())

// routes
app.use('/auth',require('./routes/auth'))
app.use('/user',require('./routes/user'))
app.use('/order',require('./routes/order'))
app.use('/product',require('./routes/product'))
app.use('/pay',require('./routes/stripe'))

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})