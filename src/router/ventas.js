const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //falta validar
    //res.render('ventas', {session: req.session.info});
    res.render('ventas', {session: {name:'admininicial', password:'admin123456', lang:'es', 'role':0, '_id':01, ubication:'bogota'}});
});

module.exports = router;