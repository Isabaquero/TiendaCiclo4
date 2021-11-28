//Api: manejador de db.
const mongoose = require('mongoose');
const user = '';
const password = '';
const dbName = 'tienda';
const uri = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{ console.log('Conexión a base de datos con exitosa.') })
.catch( (e)=>{ console.log('Ocurrio el siguiente error: '+e)} );

module.exports = mongoose;