const { Router } = require("express");
const router = Router();
const Product = require("../models/Product.js")
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")
const { getProducts, deleteProducts } = require("../controllers/getProducts.js");
const e = require("express");

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
        obj.image = image 
        console.log(obj.image)
        const objectMongo = Product(obj)
        const result = await objectMongo.save() 
        return res.status(200).json(result)
    }catch(error){
            res.status(500).json({'error: ': error})
        }
})

router.put("/:id", async (req,res)=>{
    try {
       let {id} = req.params
     let obj = req.body
     if(Array.isArray(obj)){
         for(const e of obj){
             let changes = {
                 image:e.url,
                 imageId:e["public_id"]
                }
                let box = await Product.findOneAndUpdate({title:e.title},changes) 
                console.log(box)
            }
            let todos = await Product.find() 
         return res.status(200).json(todos) 
     }
     
        
    let a = await Product.findByIdAndUpdate(id, req.body);
    let b = await Product.findById(id);
        res.status(201).json({a,b})
    } catch (error) 
    {
        res.status(400).send(error)
    } 
})

router.delete("/:id", async (req,res)=>{
    try {
        let {id} = req.params
        let a = await deleteProducts(id)
        return res.status(201).json(a)
    } catch (error) {
        res.status(400).send(error)
    } 
})

module.exports = router;