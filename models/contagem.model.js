import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Fabrica from "./fabrica.model.js";

const Contagem = db.define('contagens', {
    contagemId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dat_mov: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    status: {
        type: Sequelize.CHAR,
        allowNull: false
    }
}, { underscored: true });

Contagem.belongsTo(Fabrica, { foreignKey: "fabricaId" })

export default Contagem;