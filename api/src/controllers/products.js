const axios = require("axios");
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary.js");
const  {Product, ProductBackUp } = require("../models/Product.js");
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
        if(validation === 'OK'){
            const { image, imageId } = await uploadToCloudinary(obj.image)
            obj.image = image
            obj.imageId = imageId 
            const objectMongo = await Product(obj);
            const result = await objectMongo.save(); 
            return result
        }
        return validation

    }catch(error){
        return error
    }
}

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

module.exports = {
    getProducts,
    deleteProducts,
    postProducts
};







