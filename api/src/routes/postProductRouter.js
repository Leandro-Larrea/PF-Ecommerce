const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")

const postProductRouter = () => {

        try {
            uploadToCloudinary()
        }catch(error){
            res.status(500).json({'error: ': error})
        }
}

module.exports = postProductRouter