require('dotenv').config()
const cloudinary = require(cloudinary).v2

{ cloud_name, cloud_api_key, cloud_api_secret } = process.env

cloudinary.config({
    name: cloud_name,
    key: cloud_api_key,
    secret: cloud_api_secret
})

module.exports = { cloudinary }

cloud_name: 'ddmdopmzf'
cloud_api_key: '465375795926734'
cloud_api_secret: 'G8Q88cKJBxk-xyDmEl2IFq8uylM'