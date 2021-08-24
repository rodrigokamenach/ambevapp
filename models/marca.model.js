import Sequelize from "sequelize";
import db from "../repositories/db.js";


const Marca = db.define('marcas', {
    marcaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

export default Marca;