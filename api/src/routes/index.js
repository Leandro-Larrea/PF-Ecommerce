const { Router } = require("express");
const productMidleware = require("./productsRouter")
const userMidleware = require("./usersRouter")


const router = Router();
router.use("/products", productMidleware)
router.use("/users", userMidleware)



module.exports = router;