import ContagemService from "../services/contagem.service.js";
import moment from 'moment';
moment.locale('pt');
moment.suppressDeprecationWarnings = true;

async function createContagem(req, res, next) {
    try {
        let contagem = req.body;
    if (!contagem.dat_mov || !contagem.status || !contagem.fabricaId) {
        throw new Error('Os campos codigo, descricao e marca são obrigatórios!');
    } 
    
    contagem.dat_mov = moment(contagem.dat_mov, 'DD/MM/YYYY').format('YYYY-MM-DD');
    // console.log(contagem.dat_mov);

    res.send(await ContagemService.createContagem(contagem));
    logger.info(`/POST /contagem - ${JSON.stringify(contagem)}`);

    } catch(err) {
        next(err);
    }    
}

async function updateContagem(req, res, next) {
    try {
        let contagem = req.body;
    if (!contagem.dat_mov || !contagem.id || !contagem.status || !contagem.fabricaId) {
        throw new Error('Os campos id, nome e telefone são obrigatórios!');
    }        

    res.send(await ContagemService.updateContagem(contagem));
    logger.info(`/UPDATE /contagem - ${JSON.stringify(contagem)}`);

    } catch(err) {
        next(err);
    }    
}

async function getContagems(req, res, next) {
    try {
        // console.log(req.query.proprietario_id);
        res.send(await ContagemService.getContagems(req.query.contagem_id));
        logger.info(`/GET /contagem`);
    } catch(err) {
        next(err);
    }
}

async function getContagem(req, res, next) {
    try {
        res.send(await ContagemService.getContagem(req.params.id));
        logger.info(`/GET /contagem - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

async function deleteContagem(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('O id é obrigatórios!');
        }
        res.send(await ContagemService.deleteContagem(req.params.id));
        logger.info(`/GET /contagem - ${JSON.stringify(req.params.id)}`);
    } catch(err) {
        next(err);
    }
}

export default {
    createContagem,
    updateContagem,
    getContagems,
    getContagem,
    deleteContagem
}