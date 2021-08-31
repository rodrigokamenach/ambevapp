import MarcaService from "../services/marca.service.js";

async function createMarca(req, res, next) {
    try {
        let marca = req.body;
    if (!marca.descricao) {
        throw new Error('Os campos nome e tipo são obrigatórios!');
    }        

    res.send(await MarcaService.createMarca(marca));
    logger.info(`/POST /marca - ${JSON.stringify(marca)}`);

    } catch(err) {
        next(err);
    }    
}

async function updateMarca(req, res, next) {
    try {
        let marca = req.body;
    if (!marca.descricao || !marca.id) {
        throw new Error('Os campos id, nome e telefone são obrigatórios!');
    }        

    res.send(await MarcaService.updateMarca(marca));
    logger.info(`/UPDATE /marca - ${JSON.stringify(marca)}`);

    } catch(err) {
        next(err);
    }    
}

async function getMarcas(req, res, next) {
    try {
        // console.log(req.query.proprietario_id);
        res.send(await MarcaService.getMarcas(req.query.marca_id));
        logger.info(`/GET /marca`);
    } catch(err) {
        next(err);
    }
}

async function getMarca(req, res, next) {
    try {
        res.send(await MarcaService.getMarca(req.params.id));
        logger.info(`/GET /marca - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

async function deleteMarca(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('O id é obrigatórios!');
        }
        res.send(await MarcaService.deleteMarca(req.params.id));
        logger.info(`/GET /marca - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

export default {
    createMarca,
    updateMarca,
    getMarcas,
    getMarca,
    deleteMarca
}