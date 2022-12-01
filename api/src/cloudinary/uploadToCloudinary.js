require('dotenv').config()
const {cloudinary} = require('./utils')

const uploadToCloudinary = async (file) => {
    let ini = file.slice(0, 4)
    let result
    if(ini === 'http')
        result = await cloudinary.v2.uploader.upload(file)
    else {
        let a = {archivo: file}
        result = await cloudinary.v2.uploader.upload(a.archivo)
    }
    return {
        'imageId': result.public_id,
        'image': result.url
    }
    
}

module.exports = uploadToCloudinary;

