const pool = require('../config/db.js')

const criarVenda = async (total) => {
  const result = await pool.query("INSERT INTO sales (total) VALUES ($1) RETURNING id", [total]);
  return result.rows[0].id;
};

const salvarItensDaVenda = async (saleId, items) => {
  const query =
    "INSERT INTO sale_items (sale_id, product_id, quantity, subtotal) VALUES ($1, $2, $3, $4)";
  for (const item of items) {
    await pool.query(query, [saleId, item.id, item.quantity, item.price * item.quantity]);
  }
};

module.exports = {
  criarVenda,
  salvarItensDaVenda
};