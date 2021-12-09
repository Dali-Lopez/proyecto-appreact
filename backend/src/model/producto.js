const mongoose = require('mongoose');
const Schema = mongoose.Schema
const productSchema = new Schema({
    idProducto: Number,
    nombre: String,
    info: String
})
module.exports = mongoose.model('producto',productSchema)