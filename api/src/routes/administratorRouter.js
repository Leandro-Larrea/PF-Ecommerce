const { Router } = require("express");
const { getAdmins, postAdmin, deleteAdmin } = require("../controllers/administrators");
const router = Router();

router.get('/', async (req, res) =>{
    const { id } = req.query
    try {
        let r = await getAdmins(id)
        res.status(200).json(r)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res) => {
    let { id, pass } = req.body
    try {
        let r = await postAdmin(id, pass)
        res.status(200).json(r)
    } catch (error) {
        res.send(200).send(error)
    }
})

router.delete('/', async (req, res) => {
    let { id } = req.query
    try {
        let r = await deleteAdmin(id)
        res.status(200).json(r)
    } catch (error) {
        res.send(200).json(error)
    }
})
module.exports = router