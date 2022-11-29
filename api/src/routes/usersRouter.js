const { Router } = require("express");
const { postUser } = require("../controllers/users.js");
const router = Router();



router.post("/", async (req,res)=>{
    try {
        let obj = req.body
        let user = await postUser(obj)
        return res.status(200).json(user)
//    const a = User(obj)
//    const s = await a.save()
//    return res.status(200).json(s)
    } catch (error) {
        res.status(400).send(error)
    } 
});

module.exports = router;