import {Sequelize} from "sequelize";

const db = new Sequelize('dummypay1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;