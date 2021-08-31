import Fabrica from "../models/fabrica.model.js";

async function insertFabrica(fabrica) {
    try {
        return await Fabrica.create(fabrica);
    } catch(err) {
        throw err;
    } 
}


async function updateFabrica(fabrica) {
    try {
        return await Fabrica.update(fabrica, {
            where: {
                fabricaId: fabrica.id
            }
        });
    } catch(err) {
        throw err;
    } 
    
}

async function getFabricas() {
    try {                
        return await Fabrica.findAll();
    } catch(err) {
        throw err;
    }   
}

async function getFabrica(id) {
    try {                
        return await Fabrica.findByPk(id);
    } catch(err) {
        throw err;
    }   
}

async function deleteFabrica(id) {
    try {                
        await Fabrica.destroy({
            where: {
                fabricaId: id
            }
        });
    } catch(err) {
        throw err;
    }   
}



export default {
    insertFabrica,
    updateFabrica,
    getFabricas,
    getFabrica,
    deleteFabrica
}