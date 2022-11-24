const  cloudinary  = require('cloudinary')
 require('dotenv').config()
 var fs = require('fs')


const { cloud_name, api_key, api_secret } = process.env

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
}) 

//const image = require('./image/messi.jpg')
const image = './messi.jpg'
//const image = './borrar.txt'


const uploadToCloudinary = async (file = image) => {
    let buffer = fs.readFileSync(file)
     await fs.writeFile('guardado.jpg', buffer, (error) => {
        if (error) console.log('error: ', error)
    }) 
    
    
    
    let result = await cloudinary.v2.uploader.upload('./guardado.jpg')
    console.log(cloudinary)
    fs.unlinkSync('./guardado.jpg')
    return result 
}

module.exports = uploadToCloudinary;