import ItemService from "../services/item.service.js";

async function createItem(req, res, next) {
    try {
        let item = req.body;
    if (!item.produtoId || !item.quantidade || !item.unidade || !item.contagemId) {
        throw new Error('Os campos codigo, descricao e marca são obrigatórios!');
    } 
    

    res.send(await ItemService.createItem(item));
    logger.info(`/POST /item - ${JSON.stringify(item)}`);

    } catch(err) {
        next(err);
    }    
}

async function updateItem(req, res, next) {
    try {
        let item = req.body;
    if (!item.id || !item.produtoId || !item.quantidade || !item.unidade || !item.contagemId) {
        throw new Error('Os campos id, nome e telefone são obrigatórios!');
    }        

    res.send(await ItemService.updateItem(item));
    logger.info(`/UPDATE /item - ${JSON.stringify(item)}`);

    } catch(err) {
        next(err);
    }    
}

async function getItems(req, res, next) {
    try {
        // console.log(req.query.proprietario_id);
        res.send(await ItemService.getItems(req.query.item_id));
        logger.info(`/GET /item`);
    } catch(err) {
        next(err);
    }
}

async function getItem(req, res, next) {
    try {
        res.send(await ItemService.getItem(req.params.id));
        logger.info(`/GET /item - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

async function deleteItem(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('O id é obrigatórios!');
        }
        res.send(await ItemService.deleteItem(req.params.id));
        logger.info(`/GET /item - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

export default {
    createItem,
    updateItem,
    getItems,
    getItem,
    deleteItem
}