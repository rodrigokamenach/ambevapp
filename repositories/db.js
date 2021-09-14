import Sequelize from "sequelize";

// const sequelize = new Sequelize(	
// 	'ambevapp', 'postgres', 'Wsi@@2021', {
//         dialect: "postgres",
//         define: {
//             timestamps: false
//         }
//     }
// );

const sequelize = new Sequelize(
    "postgres://postgres:Wsi@@2021@34.204.162.68/ambevapp",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);


export default sequelize;
