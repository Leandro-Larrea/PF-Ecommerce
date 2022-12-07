const axios = require("axios");
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary.js");
const  {Product, ProductBackUp } = require("../models/Product.js");
const { User } = require("../models/User.js");
const productValidation = require("./productValidation.js");

const getProducts = async(title)=>{
    let productsDb = await Product.find();
    if (!!title){
        let producsFilter = productsDb.filter(e=> e.title.toLowerCase().includes(title.toLowerCase()));
        return producsFilter;
    }
    else {
        return productsDb
    }
};


const postProducts = async(obj) => {
    try {
        let validation = productValidation(obj)
        console.log("desde el try")
        if(validation === 'OK'){
            const { image, imageId } = await uploadToCloudinary(obj.image)
            obj.image = image
            obj.imageId = imageId 
            const objectMongo = await Product(obj);
            console.log("holaaaa",objectMongo)
            const result = await objectMongo.save(); 
            return result
        }
        return validation

    }catch(error){
        return error
    }
}

const reviewProduct = async(obj) => {
   const { userId, productId, review } = obj
   try {
    // let updateUser = await User.findByIdAndUpdate(userId,{$pop:{reviews:-1}}) 
    // let updateProduct = await Product.findByIdAndUpdate(productId,{$pop:{reviews:-1}})
    let updateUser = await User.findByIdAndUpdate(userId,{$push:{reviews:{product:productId, review:review}}}) 
    let updateProduct = await Product.findByIdAndUpdate(productId,{$push:{reviews:{user:userId, review:review}}})
    let a = await User.findById(userId)
    let b = await Product.findById(productId)
    return [a,b]
   } catch (error) {
    throw (error)
   }   
}

const ratingProduct = async(obj) => {
    const { userId, productId, review } = obj
    try {
     // let updateUser = await User.findByIdAndUpdate(userId,{$pop:{reviews:-1}}) 
     // let updateProduct = await Product.findByIdAndUpdate(productId,{$pop:{reviews:-1}})
     let updateUser = await User.findByIdAndUpdate(userId,{$push:{reviews:{product:productId, review:review}}}) 
     let updateProduct = await Product.findByIdAndUpdate(productId,{$push:{reviews:{user:userId, review:review}}})
     let a = await User.findById(userId)
     let b = await Product.findById(productId)
     return [a,b]
    } catch (error) {
     throw (error)
    }   
 
 }

/////* product delete with buckup*///////
const deleteProducts = async(id)=>{
    let productDb = await Product.findById(id);
     let o = productDb;
     let obj = { 
         title: o.title,
         price: o.price,
         description: o.description,
         category: o.category,
         rating: o.rating,
         image: o.image,
         imageId: o.imageId,
         details: o.details,
         reviews: o.reviews,
         createdAt:o.createdAt,
       }

    let productMoved = await ProductBackUp(obj);
    console.log("hasta aca si")
    const saved = await productMoved.save();
    let a = await productDb.delete();
    if (a) return a;
    throw ("some error ocurred into the controller");
 };

 const restoreProducts = async(id)=>{
    let productDb = await ProductBackUp.findById(id);
     let o = productDb;
     let obj = { 
         title: o.title,
         price: o.price,
         description: o.description,
         category: o.category,
         rating: o.rating,
         image: o.image,
         imageId: o.imageId,
         details: o.details,
         reviews: o.reviews,
         createdAt:o.createdAt,
       }

    let productMoved = await Product(obj);
    console.log("hasta aca si")
    const saved = await productMoved.save();
    let a = await productDb.delete();
    if (a) return a;
    throw ("some error ocurred into the controller");
 };
//////* product delete with buckup*///////

//////* product logic "delete"*///////

const logicDelete = async(id,change)=>{
    let productDb = await Product.findByIdAndUpdate(id, available);   
    console.log("hasta aca si")
    const saved = await productMoved.save();
    let a = await productDb.delete();
    if (a) return a;
    throw ("some error ocurred into the controller");
 };
module.exports = {
    getProducts,
    deleteProducts,
    postProducts,
    reviewProduct
};







