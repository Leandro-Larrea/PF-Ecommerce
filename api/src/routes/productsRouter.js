const { Router } = require("express");
const router = Router();
const {Product, ProductBackUp} = require("../models/Product.js")
const uploadToCloudinary = require("../cloudinary/uploadToCloudinary")
const { getProducts, postProducts, reviewProduct, getProductField, getReviews, deleteProducts, restoreProducts } = require("../controllers/products.js");

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

router.get("/deleted", async(req, res)=>{
    try {
        let {name} = req.query
        if(name){
           let filterProducts = await getProducts(name)
           return res.status(200).json(filterProducts)
        }
        let products = await ProductBackUp.find();
         res.status(200).json(products);
    } catch (error) {
         res.status(404).send("it doesn't work");
    }
});

router.get("/field", async (req,res)=>{
    const {field} = req.query
   
    try {
      let a = await getProductField(field)
        res.status(200).json(a)
    } catch (error) {
        res.status(400).json(error)
    } 
})

router.get("/reviews", async (req,res)=>{
    const {id} = req.query
   
    try {
        const result = await getReviews(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    } 
})

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
        return res.status(200).json(result);
    }catch(error){
        res.status(500).json({'error: ': error})
    }
})

router.put("/reviews", async (req,res)=>{
    try {
         await reviewProduct(req.body)
         let response = await getReviews()
        res.status(201).json(response)
    } catch (error) {
        res.status(400).send(error)
    } 
})

router.put("/restore/:id", async(req, res)=>{
    let {id} = req.params;
    try {
       let restored = await restoreProducts(id)
       return res.status(201).json(restored)
    } catch (error) {
        return res.status(404).json({error:error})
    }   
}
)

router.put("/:id", async (req,res)=>{
    try {
    let {id} = req.params;
    let a = await Product.findByIdAndUpdate(id, req.body)
    let b = await Product.findById(id);
    res.status(200).json({a,b})
    } catch (error) {
        res.status(400).send("something went wrong")
    } 
})

///////Ruta para borrar todos los documentos por algun fragmento del titulo



router.delete("/title", async (req, res) => {
    let { title } = req.query
    let c = 0
    try {
        let obj = await getProducts(title)
        console.log(obj)
        for (const it of obj) {
           
            deleted = await Product.findByIdAndDelete(it._id)
            c += deleted.deletedCount
            }                
        res.status(200).json({'borrados: ': c})
    } catch (error) {
        res.status(400).send({"something get wrong": error})
    } 
  })

router.delete("/:id", async(req, res)=>{
        let {id} = req.params;
        try {
           let deleted = await deleteProducts(id)
           return res.status(201).json(deleted)
        } catch (error) {
            return res.status(404).json({error:error})
        }   
    }
)



module.exports = router;