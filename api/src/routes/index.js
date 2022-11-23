const { Router } = require("express");
const productMidleware = require("./productsRouter")
const userMidleware = require("./usersRouter")
const postProductRouter = require("./postProductRouter")

const router = Router();
router.use("/products", productMidleware)
router.use("/users", userMidleware)
router.use("/postproduct", postProductRouter)


module.exports = router;