const express = require('express')
const app = express()

//db
const connectDatabase = require('./config/connectDatabases')

//env
const dotenv =require('dotenv')
const path = require('path')
dotenv.config({path:path.join(__dirname,'config' , 'config.env')})

//routes
const productRouter = require('./routes/product');
const orderRouter  = require('./routes/order');

connectDatabase();

//middleware
app.use(express.json())

//routes before perfic using
app.use('/api/v1/',productRouter);
app.use('/api/v1', orderRouter);




app.listen(process.env.PORT,()=>{
    console.log(`servering in running in ${process.env.PORT} in ${process.env.NODE_ENV} `)
})