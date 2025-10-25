const express = require('express');
const { getProdutos } = require("../controllers/produtosController")

const rotasProduto = express.Router();

rotasProduto.get("/produto",  getProdutos);


module.exports = rotasProduto;