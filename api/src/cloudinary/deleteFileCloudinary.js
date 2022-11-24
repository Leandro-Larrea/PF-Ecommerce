require('dotenv').config()
var fs = require('fs')
const {cloudinary} = require('./utils')



const deleteFileCloudinary = (public_id) => {
    cloudinary.v2.uploader.destroy(public_id)
    return 'borrado'
}

module.exports = deleteFileCloudinary;