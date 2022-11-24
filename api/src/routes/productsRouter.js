const { Router } = require("express");
const router = Router();
const Product = require("../models/Product.js")
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")


router.get("/", async(req, res) =>{
    try {
        let products = await Product.find();
         res.status(200).json(products);
    } catch (error) {
         res.status(404).send({"le erraste chamigo": error});
    }
});

router.post('/', async (req, res) => {
    let obj = req.body
    try {
        let image = await uploadToCloudinary(obj.image)
        obj.image = image 
        const objectMongo = Product(obj)
        const result = await objectMongo.save() 
        return res.status(200).json(result)
    }catch(error){
            res.status(500).json({'error: ': error})
        }
})

module.exports = router;