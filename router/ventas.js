const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ventas', {lang: 'es'});
});

module.exports = router;