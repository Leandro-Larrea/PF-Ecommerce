const { Router } = require("express");
const router = Router();
const Product = require("../models/Product.js")
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")
const { getProducts } = require("../controllers/getProducts.js");

router.get("/", async(req, res) =>{
    try {
        let {name} = req.query
        if(name){
           let filterProducts = await getProducts(name)
           return res.status(200).json(filterProducts)
        }
        let products = await Product.find();
         res.status(200).json(products);
    } catch (error) {
         res.status(404).send("it doesn't work");
    }
});

router.post('/', async (req, res) => {
    let obj = req.body
    try {
        let image = await uploadToCloudinary(obj.image)
        console.log('imagen: ', image)
        //obj.image = image 
        //const objectMongo = Product(obj)
        //const result = await objectMongo.save() 
        return res.status(200).json(image)
    }catch(error){
            res.status(500).json({'error: ': error})
        }
})

router.put("/:id", async (req,res)=>{
    try {
    let {id} = req.params

    let a = await Product.findByIdAndUpdate(id, req.body);
    let b = await Product.findById(id);
        res.status(200).json({a,b})
    } catch (error) {
        res.status(400).send("something get wrong")
    } 
})

module.exports = router;