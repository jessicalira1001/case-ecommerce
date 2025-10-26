const {listProdutos, findProdutoById,} = require('../services/carrinhoService.js')

// POST /carrinho
const postCarrinho = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity)
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });

  try {
    const produto = await pool.query("SELECT * FROM products WHERE id = $1", [
      productId,
    ]);

    if (produto.rows.length === 0)
      return res.status(404).json({ error: "Produto não encontrado" });

    res.status(200).json({
      message: "Produto adicionado ao carrinho com sucesso",
      produto: produto.rows[0],
      quantity,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao adicionar produto ao carrinho" });
  }
};

// PUT /carrinho
const putCarrinho = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId)
    return res.status(400).json({ error: "É necessário o ID do produto" });

  res.status(200).json({
    message:
      quantity > 0
        ? "Quantidade atualizada com sucesso"
        : "Produto removido do carrinho",
  });
};

module.exports = {
    postCarrinho,
    putCarrinho
};