const express = require('express');
const { postCompra } = require("../controllers/compraController")

const rotasCompra = express.Router();

rotasCompra.post("/finalizar-compra",  postCompra);


module.exports = rotasCompra;