import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Produto from "./produto.model.js";
import Contagem from "./contagem.model.js";

const Item = db.define('contagem_itens', {
    itemId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantidade: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    unidade: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

Item.belongsTo(Produto, { foreignKey: "produtoId" })

Item.belongsTo(Contagem, { foreignKey: "contagemId" })

export default Item;