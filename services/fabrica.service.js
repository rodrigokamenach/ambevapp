import FabricaRepositorie from "../repositories/fabrica.repositories.js";


async function createFabrica(fabrica) {
    return await FabricaRepositorie.insertFabrica(fabrica);
}

async function updateFabrica(fabrica) {
    return await FabricaRepositorie.updateFabrica(fabrica);
}

async function getFabricas() {
    return await FabricaRepositorie.getFabricas();
}

async function getFabrica(id) {
    return await FabricaRepositorie.getFabrica(id);
}

async function deleteFabrica(id) {
    return await FabricaRepositorie.deleteFabrica(id);
}


export default {
    createFabrica,
    updateFabrica,
    getFabricas,
    getFabrica,
    deleteFabrica
}