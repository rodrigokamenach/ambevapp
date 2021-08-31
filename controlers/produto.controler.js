import ProdutoService from "../services/produto.service.js";

async function createProduto(req, res, next) {
    try {
        let produto = req.body;
    if (!produto.codigo || !produto.descricao || !produto.marcaId) {
        throw new Error('Os campos codigo, descricao e marca são obrigatórios!');
    }        

    res.send(await ProdutoService.createProduto(produto));
    logger.info(`/POST /produto - ${JSON.stringify(produto)}`);

    } catch(err) {
        next(err);
    }    
}

async function updateProduto(req, res, next) {
    try {
        let produto = req.body;
    if (!produto.codigo || !produto.id || !produto.descricao || !produto.marcaId) {
        throw new Error('Os campos id, nome e telefone são obrigatórios!');
    }        

    res.send(await ProdutoService.updateProduto(produto));
    logger.info(`/UPDATE /produto - ${JSON.stringify(produto)}`);

    } catch(err) {
        next(err);
    }    
}

async function getProdutos(req, res, next) {
    try {
        // console.log(req.query.proprietario_id);
        res.send(await ProdutoService.getProdutos(req.query.produto_id));
        logger.info(`/GET /produto`);
    } catch(err) {
        next(err);
    }
}

async function getProduto(req, res, next) {
    try {
        res.send(await ProdutoService.getProduto(req.params.id));
        logger.info(`/GET /produto - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

async function deleteProduto(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('O id é obrigatórios!');
        }
        res.send(await ProdutoService.deleteProduto(req.params.id));
        logger.info(`/GET /produto - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

export default {
    createProduto,
    updateProduto,
    getProdutos,
    getProduto,
    deleteProduto
}