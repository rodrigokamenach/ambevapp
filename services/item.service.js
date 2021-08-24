import ItemRepositorie from "../repositories/item.repositories.js";


async function createItem(item) {    
    return await ItemRepositorie.insertItem(item);
}

async function updateItem(item) {
    return await ItemRepositorie.updateItem(item);
}

async function getItems() {
    return await ItemRepositorie.getItems();
}

async function getItem(id) {
    return await ItemRepositorie.getItem(id);
}

async function deleteItem(id) {
    return await ItemRepositorie.deleteItem(id);
}


export default {
    createItem,
    updateItem,
    getItems,
    getItem,
    deleteItem
}