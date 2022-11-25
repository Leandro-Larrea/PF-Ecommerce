const axios = require("axios");
const Product = require("../models/Product.js");

const getProducts = async(title)=>{
   let productsDb = await Product.find();
   let producsFilter = productsDb.filter(e=> e.title.toLowerCase().includes(title.toLowerCase()));
   if (producsFilter.length) return producsFilter;
   throw ("the text doesn't match any product");
};

module.exports = {
    getProducts
};