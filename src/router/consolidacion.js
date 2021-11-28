const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('consolidacion', {lang: 'es'});
});

module.exports = router;