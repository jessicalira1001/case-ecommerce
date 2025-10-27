const {criarVenda, salvarItensDaVenda} = require("../repositories/compraRepository.js");

const finalizaCompra = async (cart) => {
  if (!cart || cart.length === 0) throw new Error("Carrinho vazio");

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const saleId = await criarVenda(total);
  await salvarItensDaVenda(saleId, cart);

  return { success: true, message: "Compra finalizada com sucesso" };
};

module.exports = {
  finalizaCompra
}