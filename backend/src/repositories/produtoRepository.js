const pool = require('../config/db.js')

const selectProdutos = async () => {
    const result = await pool.query('SELECT * FROM products');
    return result.rows;
}

module.exports = {
    selectProdutos
};