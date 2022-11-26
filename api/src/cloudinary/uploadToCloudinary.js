require('dotenv').config()
var fs = require('fs')
const {cloudinary} = require('./utils')

const uploadToCloudinary = async (file) => {
    let ini = file.slice(0, 4)
    let result
    if(ini === 'http')
        result = await cloudinary.v2.uploader.upload(file)
    else {
        result = await fs.writeFile('guardado.jpg', file, (error) => {
             if (error) throw('error: ', error)
         }) 
        result = await cloudinary.v2.uploader.upload('./guardado.jpg')
        fs.unlinkSync('./guardado.jpg')
    }
    return {
        'imageId': result.public_id,
        'image': result.url
    }
    
}

module.exports = uploadToCloudinary;

