import { Sequelize } from "sequelize";
import { dbConfig } from "../../config/index";


const sequelize = new Sequelize({
    host: dbConfig.DB_HOST,
    dialect: 'mysql',
    username: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_NAME,
    logging: true, // Disable logging; default: console.log
});

export default sequelize;