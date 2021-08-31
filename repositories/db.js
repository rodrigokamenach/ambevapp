import Sequelize from "sequelize";

const sequelize = new Sequelize(	
	'ambevapp', 'postgres', 'Wsi@@2021', {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default sequelize;
