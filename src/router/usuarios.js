const express = require('express');
const router = express.Router();
//Modelo:
const User = require('../model/user');

//Si quiero mostrar usuarios:
/*router.get('/', (req, res) => {
    res.render('usuarios', {lang: 'es'});
});*/


//Cuando el usuario desee logearse:
router.post('/login', async(req, res) => {
    console.log(req.body);
    //Valores traidos:
    let name = req.body.name;
    let password = req.body.password;
    let ubication = req.body.ubication;

    //Respuesta json:
    const response = {
        title: 'Ha ocurrido un error.',
        msj: 'Ha ocurrido un error desconocido.',
        value: false
    }

    //Validamos si ubicación no tiene nada, entonces será 'all' y validamos que exista nombre y password
    if(!ubication) ubication = 'all';
    if(!name || !password) response.msj = 'Falta completar los campos.';
    else{
        try
        {
            //Buscamos dicho usuario:
            const user = await User.findOne({name: name, password: password, ubication: ubication});
            //Si no existe, retornamos la respuesta:
            if(!user) response.msj = 'Nombre y/o contraseña y/o ubicación incorrecta, verifique.';
            else{
                //Si existe, entonces generamos las session:
                req.session.id = user.id;
                req.session.name = user.name;
                req.session.ubication = user.ubication;
                req.session.role = user.role;
                //Valor de éxito, 1:
                response.title = 'Logeo con éxito.';
                response.msj = 'Felicitaciones, en un segundo será redireccionado.';
                response.success = 1;
            }
        }
        catch(e){ response.msj = 'Error encontrado al buscar usuario: '+e; }
    }
    //Imprimimos respuesta:
    res.json(response);
});


module.exports = router;