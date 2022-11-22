const { Router } = require("express");
const router = Router();
const productMidleware = require("./productsRouter")
const userMidleware = require("./usersRouter")

router.use("/products", productMidleware)
router.use("/users", userMidleware)

module.exports = router;