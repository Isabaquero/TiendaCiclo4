const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //falta validar
    //res.render('ventas', {session: req.session.info});
    req.session.info =  {name:'admininicial', password:'admin123456', lang:'es', 'role':0, '_id':01, ubication:'bogota'};
    if( req.session.info ) res.render('reportes', {session: req.session.info});
    else res.redirect('/');
});
router.get('/clientes', async(req, res) => {
    //falta validar
    //res.render('ventas', {session: req.session.info});
    req.session.info =  {name:'admininicial', password:'admin123456', lang:'es', 'role':0, '_id':01, ubication:'bogota'};
    const sales = require('../model/sale');
    if( req.session.info ){ 
        // try {
        //     const arraySalesDB = await sales.find();
        //     console.log(arraySalesDB)
            res.render('reportesClientes', {session: req.session.info}//,{
                //arraySales : arraySalesDB
            /*}*/);
            //console.log("Sales: ",arraySales)
        // } catch (error) {
        //     console.log(error)
        // }
        

    }
    else res.redirect('/');
});
router.get('/ventas', (req, res) => {
    //falta validar
    //res.render('ventas', {session: req.session.info});
    req.session.info =  {name:'admininicial', password:'admin123456', lang:'es', 'role':0, '_id':01, ubication:'bogota'};
    if( req.session.info ) res.render('reportesVentas', {session: req.session.info});
    else res.redirect('/');
});

module.exports = router;