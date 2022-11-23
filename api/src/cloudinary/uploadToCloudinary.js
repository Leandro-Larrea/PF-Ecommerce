const { cloudinary } = require('./utils/cloudinary')
const image = require('./image/messi.jpg')

const uploadToCloudinary = async (file = image) => {

    const reader = new FileReader()
    reader.readAsDataURL(file)
    uploadImage(file)

    const uploadedResponse = await cloudinary.uploader.upload(file, {
        upload_preset : 'PF-Ecommerce'
    }) 

    console.log('respuesta: ', uploadedResponse)
    return ({'messenge': 'Subido con exito'})
}

const uploadImage = (base64EncodedImage) => {
    console.log('imagen : ', base64EncodedImage)
}

module.exports = uploadToCloudinary;