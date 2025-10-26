const pool = require('../config/db.js')

const selectProdutos = async () => {
    const result = await pool.query('SELECT * FROM products');
    return result.rows;
}

const selectProdutoById = async (id) => {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', id);
    return result.rows;
}

module.exports = {
    selectProdutos,
    selectProdutoById
};