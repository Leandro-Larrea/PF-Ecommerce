const axios = require("axios");
const  {Product, ProductBackUp } = require("../models/Product.js");

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
         updatedAt:o.updatedAt
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
    deleteProducts
}