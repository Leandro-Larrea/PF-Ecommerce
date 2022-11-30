const  cloudinary  = require('cloudinary')
require("dotenv").config();
const { cloud_name, api_key, api_secret } = process.env

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
}) 


module.exports = {cloudinary}