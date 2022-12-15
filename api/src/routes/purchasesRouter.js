const { Router } = require("express");
const { savePayment, findPayments, findByUser, getPaymentDetails } = require("../controllers/payments.js");
const router = Router();


router.post("/", async (req,res)=>{
    try { 
   const payment = await savePayment(req.body)
   return res.status(200).json(payment)
    } catch (error) {
        res.status(400).send({'error: ': error})
    } 
})

router.get("/userPayment", async(req, res) =>{
    const { id }= req.query
    try {
        let payments = await findByUser(id);
         res.status(200).json(payments);
    } catch (error) {
         res.status(404).send({'error:': error});
    }
});

router.get("/", async(req, res) =>{
    const { id } = req.query
    console.log("purchases") 
    try {
        let payments = await findPayments(id);
         res.status(200).json(payments);
    } catch (error) {
         res.status(404).send({'error: ': error});
    }
});

router.get("/:id", async(req, res) =>{
    console.log("purchases") 
    const {id}= req.params
    try {
        let details = await getPaymentDetails(id);
        return res.status(200).json(details);
    } catch (error) {
         res.status(404).send({'error: ': error});
    }
});

module.exports = router;


