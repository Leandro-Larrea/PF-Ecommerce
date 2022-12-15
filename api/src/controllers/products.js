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

const getProductField = async(field)=>{

   let a = await Product.find(null,{[field]:1, _id: 0})
   return a
}

const reviewProduct = async(obj) => {
   const {userName, userId, productId, review } = obj
   if(!userId || !productId || !review || !userName) throw "faltan argumentos"
   try {
    // let updateUser = await User.findByIdAndUpdate(userId,{$pop:{reviews:-1}})
    // let updateProduct = await Product.findByIdAndUpdate(productId,{$pop:{reviews:-1}})
    
    let productR = await Product.findById(productId,{reviews:1, _id:0})
    if(productR.reviews.map(e=> e.user).includes(userId)){
        let updateReview = productR.reviews.map(e=> {
            if(e.user === userId) e.review = review
            return e
        })
        
        let userReviews = await User.findById(userId, {reviews:1 ,_id:0})
        let updatedUserReviews = userReviews.reviews.map(e=> {
            if(e.product === productId) e.review = review
            return e
        })
        console.log("dentro del if", updatedUserReviews)
        await User.findByIdAndUpdate(userId, {reviews:updatedUserReviews})
        await Product.findByIdAndUpdate(productId, {reviews:updateReview})
        let a = await Product.findByIdAndUpdate(productId,{updateReview})
        let b = await Product.findById(productId,{reviews:1, _id:0})
        return b
    }

    let updateUser = await User.findByIdAndUpdate(userId,{
        $push:{
            reviews:{product:productId, review:review}
        }
    })

    console.log("Esto es push",userName)
    let updateProduct = await Product.findByIdAndUpdate(productId,{
        $push:{
            reviews:{userName: userName, user: userId, review: review}
        }
    })
    let a = await User.findById(userId,{reviews: 1})
    let b = await Product.findById(productId, {reviews: 1})
    console.log(b)
    return [a,b]
   } catch (error) {
    throw (error)
   }
}

const ratingProduct = async(userId,productId,rating) => {
    let product = await Product.findById(productId,{rating:1, _id:0})
    if(product.rating.votedFor.map(e=> e.userId).includes(userId)){
        let votedFor = product.rating.votedFor.map(e=> {
            if(e.userId === userId) e.rating = rating
            return e
    })
        let a = await Product.findByIdAndUpdate(productId,{rating:{votedFor}})
        let b = await Product.findById(productId,{rating:1, _id:0})
        return b
    }

    let votedFor = [...product.rating.votedFor, {userId, rating}]
    let a = await Product.findByIdAndUpdate(productId,{rating:{votedFor}})
    let b = await Product.findById(productId,{rating:1, _id:0})
        return b


}
       

 const getReviews = async () =>{
    let products = await Product.find()
    products = products.map(res => {
        return {
            productId: res._id,
             reviews: res.reviews
        }
    })
    return products

 }

/////* product delete with buckup*///////
const deleteProducts = async(id)=>{
    let productDb = await Product.findById(id);
     let o = productDb;
     let obj = {
        _id: o._id,
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
    console.log("backup",productDb)
     let o = productDb;
     let obj = {
        _id: o._id,
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
    restoreProducts,
    postProducts,
    reviewProduct,
    getProductField,
    getReviews,
    ratingProduct
};







