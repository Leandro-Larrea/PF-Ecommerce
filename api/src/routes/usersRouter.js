const { Router } = require("express");
const router = Router();
const User = require("../models/user.js");

router.post("/", async (req,res)=>{
    try {
        let obj = req.body
   const a = User(obj)
   const s = await a.save()
   return res.status(200).json(s)
    } catch (error) {
        res.status(400).send("something get wrong")
    } 
});





module.exports = router;