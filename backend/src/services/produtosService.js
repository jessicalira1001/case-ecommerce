const {selectProdutos} = require('../repositories/produtosRepository.js')

const listProdutos = async () => {

        return await selectProdutos();
   
}

module.exports = {
    listProdutos
};