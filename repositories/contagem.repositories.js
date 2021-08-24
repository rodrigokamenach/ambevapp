import Contagem from "../models/contagem.model.js";
import Fabrica from "../models/fabrica.model.js";

async function insertContagem(contagem) {
    try {
        return await Contagem.create(contagem);
    } catch(err) {
        throw err;
    } 
}


async function updateContagem(contagem) {
    try {
        return await Contagem.update(contagem, {
            where: {
                contagemId: contagem.id
            }
        });
    } catch(err) {
        throw err;
    } 
    
}

async function getContagems() {
    try {                
        return await Contagem.findAll({
            include: {
                model: Fabrica
            }
        });
    } catch(err) {
        throw err;
    }   
}

async function getContagem(id) {
    try {                
        return await Contagem.findByPk(id);
    } catch(err) {
        throw err;
    }   
}

async function deleteContagem(id) {
    try {                
        await Contagem.destroy({
            where: {
                contagemId: id
            }
        });
    } catch(err) {
        throw err;
    }   
}



export default {
    insertContagem,
    updateContagem,
    getContagems,
    getContagem,
    deleteContagem
}