const express = require('express');
const { postCarrinho, putCarrinho } = require("../controllers/carrinhoController")

const rotasCarrinho = express.Router();

rotasCarrinho.post("/carrinho",  postCarrinho);
rotasCarrinho.put("/carrinho",  putCarrinho);


module.exports = rotasCarrinho;