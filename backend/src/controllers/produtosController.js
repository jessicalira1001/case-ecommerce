const {listProdutos, findProdutoById,} = require('../services/produtosService.js')


const getProdutos = async (req, res) => {
    try {
        const listaDeProdutos = await listProdutos();
        res.status(200).json(listaDeProdutos);
    } catch (error) {
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

const getProdutosById = async (req, res) => {
    try {
        const {id} = req.params;
        const taskEncontrada = await findProdutoById(id, userId);    
        res.status(200).json(taskEncontrada);
    } catch (error){
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

module.exports = {
    getProdutos
};