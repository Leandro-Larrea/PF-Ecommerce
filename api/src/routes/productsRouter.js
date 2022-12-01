const { Router } = require("express");
const router = Router();
const {Product} = require("../models/Product.js")
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")
const { getProducts, postProducts } = require("../controllers/products.js");

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

router.get("/:id", async (req,res)=>{
    try {
    let {id} = req.params

    let a = await Product.findById(id);
        res.status(200).json({a})
    } catch (error) {
        res.status(400).json({"errorGetById":error})
    } 
})

router.post('/', async (req, res) => {
    try {
        let result = await postProducts(req.body)
        console.log("aca envio",req.body)
        return res.status(200).json(result);
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

///////Ruta para borrar un documento de mongoose usando el titulo. Tambien borra su imagen de cloudinary
router.delete("/title/:title", async (req, res) => {
    let { title } = req.params
    try {
        let obj = await Product.findOne({title: title})
        deleteFileCloudinary(obj.imageId)
        let deleted = await Product.deleteOne({_id: obj._id})
        res.status(200).json(deleted)
    } catch (error) {
        res.status(400).send({"something get wrong": error})
    } 
  })


module.exports = router;