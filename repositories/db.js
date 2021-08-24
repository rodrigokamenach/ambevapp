import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://postgres:Wsi@@2021@ec2-35-168-8-154.compute-1.amazonaws.com:5432/ambevapp",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default sequelize;