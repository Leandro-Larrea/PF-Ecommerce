const { Router } = require("express");
const router = Router();
const getApiProducts = require("../controllers/getProducts.js");
const Product = require("../models/Product.js");

router.get("/", async(req, res) =>{
    try {
        let products = await Product.find();
         res.status(200).json(products);
    } catch (error) {
         res.status(404).send("le erraste chamigo");
    }
});



router.post("/", async (req, res)=>{
    try {
        let obj = req.body
        if(Array.isArray(obj)){
            for(const e of obj){
            let product = {
                title:e.title,
                price:e.price,
                description:e.description ,
                category: e.category,
                image: e.image,
                rating:{
                points: 0,
                votes: 0
                },
                details:e.details
        }
        let a = Product(product)
        let s = await a.save()
            }
            let productsDb = await Product.find();
            return res.status(200).json(productsDb);
        }
   const a = Product(obj)
   const s = await a.save()
   return res.status(200).json(s)
    } catch (error) {
        res.status(400).send("something get wrong posting")
    } 
});

module.exports = router;