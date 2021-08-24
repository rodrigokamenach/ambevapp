import FabricaService from "../services/fabrica.service.js";

async function createFabrica(req, res, next) {
    try {
        let fabrica = req.body;
    if (!fabrica.nome) {
        throw new Error('Os campos nome e tipo são obrigatórios!');
    }        

    res.send(await FabricaService.createFabrica(fabrica));
    logger.info(`/POST /fabrica - ${JSON.stringify(fabrica)}`);

    } catch(err) {
        next(err);
    }    
}

async function updateFabrica(req, res, next) {
    try {
        let fabrica = req.body;
    if (!fabrica.nome || !fabrica.id) {
        throw new Error('Os campos id, nome e telefone são obrigatórios!');
    }        

    res.send(await FabricaService.updateFabrica(fabrica));
    logger.info(`/UPDATE /fabrica - ${JSON.stringify(fabrica)}`);

    } catch(err) {
        next(err);
    }    
}

async function getFabricas(req, res, next) {
    try {
        // console.log(req.query.proprietario_id);
        res.send(await FabricaService.getFabricas(req.query.fabrica_id));
        logger.info(`/GET /fabrica`);
    } catch(err) {
        next(err);
    }
}

async function getFabrica(req, res, next) {
    try {
        res.send(await FabricaService.getFabrica(req.params.id));
        logger.info(`/GET /fabrica - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

async function deleteFabrica(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('O id é obrigatórios!');
        }
        res.send(await FabricaService.deleteFabrica(req.params.id));
        logger.info(`/GET /fabrica - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

export default {
    createFabrica,
    updateFabrica,
    getFabricas,
    getFabrica,
    deleteFabrica
}