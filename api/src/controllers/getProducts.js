const axios = require("axios");

const getApiProducts = async()=>{
    let products = await axios.get('https://fakestoreapi.com/products');   
    return products.data;
};

module.exports = getApiProducts;