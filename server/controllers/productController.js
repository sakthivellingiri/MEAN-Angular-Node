const ProductModel = require('../models/productModel');


//Get Product API - /api/v1/product
exports.getProducts = async (req ,  res , next )=>{

 const products =  await ProductModel.find({});

    res.json({
        success:true,
        message:"Get product working",
        products
    })
}


//Get Single Product API - /api/v1/product/:id
exports.getSingleProducts = async (req ,  res , next )=>{

    try{
  const singleProduct = await ProductModel.findById(req.params.id)
  res.json({
    success:true,
    message:"Get single product working",
    singleProduct
})
    }catch(error){
        res.status(404).json({
            success:false,
            message:error.message
        })

    }
}