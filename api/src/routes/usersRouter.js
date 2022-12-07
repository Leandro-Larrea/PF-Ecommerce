const { Router } = require("express");
const { postUser, getUser } = require("../controllers/users.js");
const router = Router();
const { User } = require('../models/User')

router.post("/", async (req,res)=>{
    try {
        let user = await postUser(req.body)
        return res.status(200).json(user)     
    } catch (error) {
        console.log(error)
        res.status(200).send(error)
    } 
});

router.get('/', async (req, res) => {
    try {
        const { id } = req.query
        let admin = await getUser(id)
        res.status(200).json(admin)
    } catch (error) {
        res.status(400).send(error)        
    }
})

router.get('/admin', async (req, res) => {
    try {
        let admin = await User.find({admin: true})
        res.status(200).json(admin)
    } catch (error) {
        res.status(400).send(error)          
    }
})

///ruta de borrado permanente
router.delete('/:_id', async (req, res) => {
    let _id = req.params
    console.log('id: ', _id )
    try {
        let user = await User.findByIdAndDelete(_id)
        res.status(200).json(user) 
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;