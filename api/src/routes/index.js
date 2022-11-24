const { Router } = require("express");
const productMidleware = require("./productsRouter")
const userMidleware = require("./usersRouter")
const categoriesMidleware = require("./categoriesRouter")


const router = Router();
router.use("/products", productMidleware)
router.use("/categories", categoriesMidleware)
router.use("/users", userMidleware)



module.exports = router;