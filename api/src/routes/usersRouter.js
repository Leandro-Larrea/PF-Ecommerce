const { Router } = require("express");
const { postUser, getUser, getCart, updateCart, getUserReviews } = require("../controllers/users.js");
const router = Router();
const { User } = require('../models/User')
const deleteFileCloudinary = require('../cloudinary/deleteFileCloudinary');
const { getReviews } = require("../controllers/products.js");
const { Product } = require("../models/Product.js");

router.post("/", async (req,res)=>{
    try {
        let user = await postUser(req.body)
        return res.status(200).json(user)     
    } catch (error) {
        console.log(error)
        res.status(200).send(error)
    } 
});

router.get('/reviews', async (req, res) => {
    try {
        const { id } = req.query
        let a = await getUserReviews(id)
      return  res.status(200).json(a)
    } catch (error) {
      return  res.status(400).send(error)        
    }
})

/////Devuelve todos los usuarios o por id
router.get('/', async (req, res) => {
    try {
        const { id } = req.query
        let a = await getUser(id)
      return  res.status(200).json(a)
    } catch (error) {
      return  res.status(400).send(error)        
    }
})

router.put("/cart/:id", async (req,res)=>{
    const {id} = req.params
    try {
        let response = await updateCart(id,req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).send(error)
    } 
})

router.get("/cart/:id", async (req,res)=>{
    const {id} = req.params
    try {
        let response = await getCart(id)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).send(error)
    } 
})

router.get('/admin', async (req, res) => {
    try {
        let admin = await User.find({admin: true})
        res.status(200).json(admin[0])
    } catch (error) {
        res.status(400).send(error)          
    }
})
router.put('/', async (req, res) => {
    try {
        let products = await Product.update({reviews:[]})
        let users = await User.update({reviews:[]})
        return res.status(201).json([products, users])
      } catch (error) {
          return res.status(404).send("la concha de la lora")
      }
})
///ruta de borrado permanente
router.delete('/:_id', async (req, res) => {
    let _id = req.params
    console.log('id: ', _id )
    try {
        let user = await User.findByIdAndDelete(_id)
        await deleteFileCloudinary(user.imageId)
        res.status(200).json(user) 
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports = router;