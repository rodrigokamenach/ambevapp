import MarcaRepositorie from "../repositories/marca.repositories.js";


async function createMarca(marca) {
    return await MarcaRepositorie.insertMarca(marca);
}

async function updateMarca(marca) {
    return await MarcaRepositorie.updateMarca(marca);
}

async function getMarcas() {
    return await MarcaRepositorie.getMarcas();
}

async function getMarca(id) {
    return await MarcaRepositorie.getMarca(id);
}

async function deleteMarca(id) {
    return await MarcaRepositorie.deleteMarca(id);
}


export default {
    createMarca,
    updateMarca,
    getMarcas,
    getMarca,
    deleteMarca
}