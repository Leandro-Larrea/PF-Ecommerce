const { Router } = require('express');
const combinedFilters = require('../controllers/combinedFilters');

const router = Router();

router.get('/', async (req, res) => {
    const { title, min, max, category } = req.query
    const obj = {
        title,
        price: {min, max},
        category
    }
    try {
        let results = await combinedFilters(obj)
        console.log(results)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({'error: ': error})
    }
})


module.exports = router