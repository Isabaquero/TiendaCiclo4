//construcción del servidor con Express.
const express = require('express');
const app = express();
const port = 5000;

//Conexión a base de datos:
const moongoose = require('./db');

//Parsear en json entradas: 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Motor de vistas ejs:
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Carpeta de recursos:
app.use(express.static(__dirname + '/public'));


//========================================
//Manejo de rutas:
app.get('/', (req,res)=>{ res.render('login', {lang: 'es'}) });
app.use('/clientes', require('./router/clientes'));
app.use('/consolidacion', require('./router/consolidacion'));
app.use('/productos', require('./router/productos'));
app.use('/ventas', require('./router/ventas'));
app.use('/usuarios', require('./router/usuarios'));
//app.use('/proveedores', require('./router/proveedores'));
//========================================


//Para páginas que no encuentre.
app.use( (req, res, next)=>{
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log('Servidor activado');
})