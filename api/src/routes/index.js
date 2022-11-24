const { Router } = require("express");
const router = Router();
const productMidleware = require("./productsRouter")
const userMidleware = require("./usersRouter")
const categoriesMidleware = require("./categoriesRouter")

router.use("/products", productMidleware)
router.use("/categories", categoriesMidleware)
router.use("/users", userMidleware)

module.exports = router;