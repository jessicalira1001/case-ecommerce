const {selectProdutoById} = require('../repositories/produtosRepository.js')

const createCarrinho = async (produtoId, quantidade) => {
    if (!productId || !quantity)
        throw new Error (400, "Campos obrigatórios ausentes" );
    
    const produto = await selectProdutoById(productId);

    if (produto.rows.length === 0)
      throw new Error (404, "Produto não encontrado" );

    return await selectProdutoById(produtoId)
    
}

module.exports = {
    createCarrinho
};