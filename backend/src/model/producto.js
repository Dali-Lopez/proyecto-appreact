const mongoose = require('mongoose');
const Schema = mongoose.Schema
const productSchema = new Schema({
    titulo: String,
    descripcion: String,
    contenido: String,
    tipo: String
})
module.exports = mongoose.model('producto',productSchema)