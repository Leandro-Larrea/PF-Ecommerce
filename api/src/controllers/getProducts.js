const axios = require("axios");
const Product = require("../models/Product.js");
const ProductBackUp = require("../models/ProductBackUp.js");


const getProducts = async(title)=>{
   let productsDb = await Product.find();
   let producsFilter = productsDb.filter(e=> e.title.toLowerCase().includes(title.toLowerCase()));
   if (producsFilter.length) return producsFilter;
   throw ("the text doesn't match any product");
};


const deleteProducts = async(id)=>{
    let productDb = await Product.findById(id)
    console.log(productDb)
    let productMoved = await ProductBackUp(productDb);
    const saved = await productMoved.save();
    let a = productDb.delete();
    if (a) return a;
    throw ("some error ocurred into the controller");
 };

module.exports = {
    getProducts,
    deleteProducts
};