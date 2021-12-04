const express = require('express');
const router = express.Router();

//Modelo:
const Sale = require('../model/sale');

router.get('/', async(req, res) => {
    req.session.info =  {name:'admininicial', password:'admin123456', lang:'es', 'role':0, '_id':01, ubication:'bogota'};
    if( req.session.info ) res.render('ventas', {session: req.session.info});
    else res.redirect('/');
});


router.post('/getConsecutive', async function(req, res) {
    let consecutive = await Sale.estimatedDocumentCount()+1;
    res.send( String(consecutive) );
});

module.exports = router;