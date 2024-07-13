
const orderModel = require('../models/orderModel')

//create order API - /api/v1/order
exports.createOrder =  (req , res , next)=>{
 console.log(req.body);

    res.json({ 
        success:true,
        message:"Order working"
    })
}