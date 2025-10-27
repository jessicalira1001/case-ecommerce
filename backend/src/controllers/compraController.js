const {finalizaCompra} = require("../services/compraService.js");

const postCompra = async (req, res) => {
  try {
    const { cart } = req.body;
    const resultado = await finalizaCompra(cart);
    res.status(201).json(resultado);
  } catch (error) {
    console.error("❌ ERRO AO FINALIZAR COMPRA:", error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postCompra
};