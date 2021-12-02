//Plantilla de modelos:
const mongoose = require('mongoose');
const schema = mongoose.Schema;

//model definition for clients sections:
const clientsSchema = new schema({
    cedula: Number,
    nombre: String,
    direccion: String,
    telefono: Number,
    correo: String
});

const db_cliente = mongoose.model('db_cliente', clientsSchema);

module.exports = db_cliente;