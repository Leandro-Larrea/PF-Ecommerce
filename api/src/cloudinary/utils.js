require('dotenv').config()
const cloudinary = require(cloudinary).v2

{ cloud_name, cloud_api_key, cloud_api_secret } = process.env

cloudinary.config({
    name: cloud_name,
    key: cloud_api_key,
    secret: cloud_api_secret
})

module.exports = { cloudinary }

