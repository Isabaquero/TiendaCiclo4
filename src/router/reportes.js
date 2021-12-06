const express = require('express');
const router = express.Router();

const Client = require("../model/client");

router.get('/', (req, res) => {
    if( req.session.info ) res.render('reportes', {session: req.session.info});
    else res.redirect('/');
});


router.get("/reportesclientes", async (req, res) => {
  if( !req.session.info ) return res.redirect('/');
  try {
    const arrayClientBD = await Client.find({ubication: req.session.info.ubication});
    res.render("reportesclientes", {
        session: req.session.info,
        arrayClients: arrayClientBD
    });
  } catch (error) {}
});


router.get('/reportesventas', (req, res) => {
    if( !req.session.info ) return res.redirect('/');

    res.render('reportesventas', {session: req.session.info});
});


module.exports = router;