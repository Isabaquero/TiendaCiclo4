const express = require("express");
const router = express.Router();

const client = require("../model/client");
router.get("/", async (req, res) => {
  try {
    const arrayClientBD = await client.find();
    console.log(arrayClientBD);
    req.session.info = {
      name: "admininicial",
      password: "admin123456",
      lang: "es",
      role: 0,
      _id: 01,
      ubication: "bogota",
    };
    if (req.session.info) {
      //falta validar
      //res.render('ventas', {session: req.session.info});
      res.render("reportesclientes", {
        session: req.session.info,
        arrayClients: arrayClientBD
      });
    } else res.redirect("/");
  } catch (error) {}
});

module.exports = router;
