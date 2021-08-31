import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Marca from "./marca.model.js";

const Produto = db.define('produtos', {
    produtoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

Produto.belongsTo(Marca, { foreignKey: "marcaId" })

export default Produto;