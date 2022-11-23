const axios = require("axios");

const getApiProducts = async()=>{
<<<<<<< Updated upstream
    let products = await axios.get('https://fakestoreapi.com/products');   
    return products.data;
};
=======
    let apiKey='8e19f6c3920148b6bfa3df238d163cb1'
    //let products = await axios.get('https://fakestoreapi.com/products')
    //let products = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${1}`)
    let products = await axios('https://randomuser.me/api')
    return products.data         
}
>>>>>>> Stashed changes

module.exports = getApiProducts;