import ProdutoRepositorie from "../repositories/produto.repositories.js";


async function createProduto(produto) {
    return await ProdutoRepositorie.insertProduto(produto);
}

async function updateProduto(produto) {
    return await ProdutoRepositorie.updateProduto(produto);
}

async function getProdutos() {
    return await ProdutoRepositorie.getProdutos();
}

async function getProduto(id) {
    return await ProdutoRepositorie.getProduto(id);
}

async function deleteProduto(id) {
    return await ProdutoRepositorie.deleteProduto(id);
}


export default {
    createProduto,
    updateProduto,
    getProdutos,
    getProduto,
    deleteProduto
}