const express = require('express');
const router = express.Router();

//Modelo:
const Client = require('../model/client');

router.get('/', (req, res) => {
    if( !req.session.info ) res.redirect('/');
    else res.render('clientes', {session: req.session.info});
});

router.post('/create', (req, res) => {
    if( !req.session.info ) exit();
    console.log(req.body);
});


router.post('/search', async (req, res) => {
    //Validamos que tenga una sessión abierta y los valores ingresados:
    if( !req.session.info || req.session.info.ubication === 'all' ) exit();
    
    //respuesta del servidor:
    let json = { success: 0 };
    
    if( !req.body.id ){ 
        json.msj = 'Falta declarar el número de documento del cliente.'; 
        res.json(json); 
        exit();
    }

    //id que se busca:
    let id_client = req.body.id;
    //ubicación de la session:
    ubication = req.session.info.ubication;

    try{
        //Buscamos el cliente con esa id y que exista en la ubicación especificada:
        let client = await Client.findOne({id_number: id_client, ubication});
    
        if( !client ) json.msj = 'El usuario ingresado no se encuentra.';
        else {
            json.success = 1;
            json.client = client;
        }
    }
    catch(e){ json.msj = 'Error encontrado: '+e; }
    res.json(json);
});


module.exports = router;