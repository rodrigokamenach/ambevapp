import Marca from "../models/marca.model.js";

async function insertMarca(marca) {
    try {
        return await Marca.create(marca);
    } catch(err) {
        throw err;
    } 
}


async function updateMarca(marca) {
    try {
        return await Marca.update(marca, {
            where: {
                marcaId: marca.id
            }
        });
    } catch(err) {
        throw err;
    } 
    
}

async function getMarcas() {
    try {                
        return await Marca.findAll();
    } catch(err) {
        throw err;
    }   
}

async function getMarca(id) {
    try {                
        return await Marca.findByPk(id);
    } catch(err) {
        throw err;
    }   
}

async function deleteMarca(id) {
    try {                
        await Marca.destroy({
            where: {
                marcaId: id
            }
        });
    } catch(err) {
        throw err;
    }   
}



export default {
    insertMarca,
    updateMarca,
    getMarcas,
    getMarca,
    deleteMarca
}