require('dotenv').config()
var fs = require('fs')
const {cloudinary} = require('./utils')

const image = './messi.jpg'
const uploadToCloudinary = async (file = image) => {
    let buffer = fs.readFileSync(file)
    await fs.writeFile('guardado.jpg', buffer, (error) => {
        if (error) console.log('error: ', error)
    }) 
      
    let result = await cloudinary.v2.uploader.upload('./guardado.jpg')
    fs.unlinkSync('./guardado.jpg')

    return {
        'public_id': result.public_id,
        'url': result.url
        }
    
}

module.exports = uploadToCloudinary;