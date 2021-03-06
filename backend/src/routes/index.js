const express = require('express')
const router = express.Router();
const Producto = require('../model/producto')

router.get("/", (req, res) => {
    res.send("K PAZO MASTER")
});
router.get('/getregistro',async (req,res) => {
    const producto = await Producto.find()
    res.send(producto)
})
router.get('/deleteRegistro/:id', async (req, res) => {
    const { id } = req.params
    await Producto.remove({_id:id})
})
router.get('/getRegistro/id', async (req, res) => {
    const { id } = req.params
    const producto = await Producto.findById(id)
    res.send(producto)
})
router.post('/addRegistro', async(req, res) => {
    console.log(req.body)
    const producto = new Producto(req.body)
    await producto.save()
    res.send(producto)
})
module.exports = router;