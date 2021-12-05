const express = require("express");
const router = express.Router();

const client = require("../model/client");
const sale = require("../model/sale");
const report = require("../model/report")
router.get("/", async (req, res) => {
  try {
    const arrayClientBD = await client.find();
    const arraySaleBD = await sale.find();
    let arrayReport =[];
    let total = 0;

    //console.log(arrayClientBD);
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
      arrayClientBD.forEach((client) => {
        const reportF = new report();
        reportF.id_number = client.id_number;
        reportF.name = client.name;
        reportF.totalSale = 0.0
        //total += parseFloat(reportF.totalSale)
        arraySaleBD.forEach(sale => {
              if (sale.cedula_client == client.id_number) {
                let aux = parseFloat(reportF.totalSale)
                aux += parseFloat(sale.valueSale);
                reportF.totalSale = aux
              }
          }); 
          total += parseFloat(reportF.totalSale)             
          arrayReport.push(reportF)
          //console.log(reportF);
      });
      console.log(arrayReport)
      

      res.render("reportesventas", {
        session: req.session.info,
        arrayReport,
        total
      });
    } else res.redirect("/");
  } catch (error) {}
});

module.exports = router;
