import Item from "../models/item.model.js";
import Produto from "../models/produto.model.js";
import Contagem from "../models/contagem.model.js";

async function insertItem(item) {
    try {
        return await Item.create(item);
    } catch(err) {
        throw err;
    } 
}


async function updateItem(item) {
    try {
        return await Item.update(item, {
            where: {
                itemId: item.id
            }
        });
    } catch(err) {
        throw err;
    } 
    
}

async function getItems() {
    try {                
        return await Item.findAll({
            include: [
                { model:  Produto },
                { model: Contagem }
            ]
        });
    } catch(err) {
        throw err;
    }   
}

async function getItem(id) {
    try {                
        return await Item.findByPk(id);
    } catch(err) {
        throw err;
    }   
}

async function deleteItem(id) {
    try {                
        await Item.destroy({
            where: {
                itemId: id
            }
        });
    } catch(err) {
        throw err;
    }   
}



export default {
    insertItem,
    updateItem,
    getItems,
    getItem,
    deleteItem
}