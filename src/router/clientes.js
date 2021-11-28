const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('clientes', {lang: 'es'});
});

router.post('/create', (req, res) => {
    console.log(req.body);
});


module.exports = router;