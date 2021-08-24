import ContagemRepositorie from "../repositories/contagem.repositories.js";


async function createContagem(contagem) {    
    return await ContagemRepositorie.insertContagem(contagem);
}

async function updateContagem(contagem) {
    return await ContagemRepositorie.updateContagem(contagem);
}

async function getContagems() {
    return await ContagemRepositorie.getContagems();
}

async function getContagem(id) {
    return await ContagemRepositorie.getContagem(id);
}

async function deleteContagem(id) {
    return await ContagemRepositorie.deleteContagem(id);
}


export default {
    createContagem,
    updateContagem,
    getContagems,
    getContagem,
    deleteContagem
}