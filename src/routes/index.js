//rutas principales de mi aplicacion
const express = require("express");
const router = express.Router(); //devuelve un objeto

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
