const { Router } = require("express");
const router = Router();
const {createCategory, findCategory} = require("../controllers/categories");


router.post("/", async (req,res)=>{
    try { 
   const categoryCreated = await createCategory(req.body)
   return res.status(200).json(categoryCreated)
    } catch (error) {
        res.status(400).send("something get wrong")
    } 
})

router.get("/", async(req, res) =>{
    try {
        let categories = await findCategory();
         res.status(200).json(categories);
    } catch (error) {
         res.status(404).send("le erraste chamigo");
    }
});

module.exports = router;