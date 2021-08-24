import Sequelize from "sequelize";
import db from "../repositories/db.js";


const Fabrica = db.define('fabricas', {
    fabricaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

export default Fabrica;