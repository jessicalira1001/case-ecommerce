const pool = require('../config/db.js')

// POST /finalizar-compra
const postCompra = async (req, res) => {
  const { cart } = req.body;

  if (!cart || cart.length === 0)
    return res.status(400).json({ error: "Carrinho vazio" });

  try {
    // Calcula total
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Cria venda
    const venda = await pool.query(
      "INSERT INTO sales (total) VALUES ($1) RETURNING id",
      [total]
    );
    const saleId = venda.rows[0].id;

    // Salva os itens da venda
    for (const item of cart) {
      await pool.query(
        "INSERT INTO sale_items (sale_id, product_id, quantity, subtotal) VALUES ($1, $2, $3, $4)",
        [saleId, item.id, item.quantity, item.price * item.quantity]
      );
    }

    res.status(201).json({ message: "Compra finalizada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao finalizar compra" });
  }
};

module.exports = {
  postCompra
};