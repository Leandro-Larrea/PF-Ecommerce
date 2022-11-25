const axios = require("axios");
const  {Product, ProductBackUp } = require("../models/Product.js");

const getProducts = async(title)=>{
   let productsDb = await Product.find();
   let producsFilter = productsDb.filter(e=> e.title.toLowerCase().includes(title.toLowerCase()));
   if (producsFilter.length) return producsFilter;
   throw ("the text doesn't match any product");
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


const filterPrice = async(price) => {
    let priceFilter = await Product.find();
    
    if(priceFilter) {
        const products = priceFilter.filter(el => el.price <= price);
        // console.log("2", products)
        return products
    };
    
};

module.exports = {
    getProducts,
    deleteProducts,
    filterPrice
}