const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('consolidacion', {session: req.session.info});
});

module.exports = router;