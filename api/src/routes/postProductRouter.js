const { Router } = require("express");
const router = Router();
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")

router.post('/', async (req, res) => {

        try {
            let result = await uploadToCloudinary()
            guardarenmongo(body.name, result)
            res.send({'listo': result})
        }catch(error){
            res.status(500).json({'error: ': error})
        }
})

module.exports = router