const { Router } = require("express");
const router = Router();
const { getProducts } = require("../controllers/getProducts.js");
const Product = require("../models/Product.js");

router.get("/", async(req, res) =>{
    try {
        let {name} = req.query
        if(name){
           let filterProducts = await getProducts(name)
           return res.status(200).json(filterProducts)
        }
        let products = await Product.find();
        products = products.map((e)=> {return {title: e.title, image: e.image}})
         res.status(200).json(products);
    } catch (error) {
         res.status(404).send("it doesn't work");
    }
});

router.post("/", async (req, res)=>{
    try {
        let obj = req.body
       
   const a = Product(obj)
   const s = await a.save()
   return res.status(200).json(s)
    } catch (error) {
        res.status(400).json(error)
    } 
});

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