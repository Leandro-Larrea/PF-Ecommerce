const { Router } = require("express");
const router = Router();
const productMidleware = require("./productsRouter")

router.use("/products", productMidleware)

module.exports = router;