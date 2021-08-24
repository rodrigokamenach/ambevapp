import Produto from "../models/produto.model.js";
import Marca from "../models/marca.model.js";

async function insertProduto(produto) {
    try {
        return await Produto.create(produto);
    } catch(err) {
        throw err;
    } 
}


async function updateProduto(produto) {
    try {
        return await Produto.update(produto, {
            where: {
                produtoId: produto.id
            }
        });
    } catch(err) {
        throw err;
    } 
    
}

async function getProdutos() {
    try {                
        return await Produto.findAll({
            include: {
                model: Marca
            }
        });
    } catch(err) {
        throw err;
    }   
}

async function getProduto(id) {
    try {                
        return await Produto.findByPk(id);
    } catch(err) {
        throw err;
    }   
}

async function deleteProduto(id) {
    try {                
        await Produto.destroy({
            where: {
                produtoId: id
            }
        });
    } catch(err) {
        throw err;
    }   
}



export default {
    insertProduto,
    updateProduto,
    getProdutos,
    getProduto,
    deleteProduto
}