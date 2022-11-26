require('dotenv').config()
var fs = require('fs')
const {cloudinary} = require('./utils')

const uploadToCloudinary = async (file) => {
    console.log("cloudinary")
    //let buffer = fs.readFileSync(file)
    
    // await fs.writeFile('guardado.jpg', buffer, (error) => {
    //     if (error) console.log('error: ', error)
    // }) 
    // fs.unlinkSync('./guardado.jpg')
      
    let result = await cloudinary.v2.uploader.upload(file)
    return {
        'imageId': result.public_id,
        'image': result.url
    }
    
}

module.exports = uploadToCloudinary;

