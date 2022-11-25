const { Router } = require("express");
const productMidleware = require("./productsRouter")
const userMidleware = require("./usersRouter")
const categoriesMidleware = require("./categoriesRouter")
const searchRouter = require("./searchRouter")

const router = Router();
router.use("/products", productMidleware)
router.use("/categories", categoriesMidleware)
router.use("/users", userMidleware)
router.use("/search", searchRouter)



module.exports = router;