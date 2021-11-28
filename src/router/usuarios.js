const express = require('express');
const router = express.Router();
//Modelo:
const User = require('../model/user');

const plantilla_msj = {
    title: 'Ha ocurrido un error.',
    description: '',
    lang: 'es',
    success: false
}

router.get('/', (req, res) => {
    res.render('clientes', {lang: 'es'});
});

router.post('/login', async(req, res) => {
    //Valores traidos:
    let name = req.body.name;
    let password = req.body.password;
    let ubication = req.body.ubication;
    //Plantilla retorno respuesta:
    json_response = plantilla_msj;
    let msj = '';

    //Si no existe email o password:
    if(!ubication) ubication = 'none';
    if(!name || !password) msj = 'No se reconocen los valores ingresados.';
    else{
        try{
            const user = User.findOne({name: name, password: password});
            console.log(user);
            if(!user) msj = 'No se reconoce el usuario.';
            else if( user.ubication != ubication && user.ubication != 'all') msj = 'Verifique que el usuario se encuentra en la localidad que es.';
            else{
                //Creo las sesiones:
                req.session.name = name;
                req.session.password = password;
                req.session.ubication = user.ubication;
                req.session.role = user.role;
                json_response.success = true;
            }
        }catch(e){ 
            msj = e;
        }
    }

    if(json_response.success) res.redirect('main');
    else{
        json_response.description = msj;
        res.redirect('/');
    }
});

module.exports = router;