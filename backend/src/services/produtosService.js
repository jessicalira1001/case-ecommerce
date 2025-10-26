const {selectProdutos, selectProdutoById} = require('../repositories/produtosRepository.js')

const listProdutos = async () => {
        return await selectProdutos();
}

const findProdutoById = async (id) => {

        return await selectProdutoById(id);
}

module.exports = {
    listProdutos,
    findProdutoById
};