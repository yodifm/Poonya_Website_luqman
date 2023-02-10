import {Sequelize} from "sequelize";

import db from "../config/database.js";

const {DataTypes} = Sequelize

const Ticket = db.define('ticket', {
    ticket_id:{
        type :DataTypes.INTEGER, 
        primaryKey:true,
        autoIncrement:true,
    },
    // ticket_number:DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    ticket_used:DataTypes.BOOLEAN,
    expired: DataTypes.DATE,
    // totalprice: DataTypes.STRING,
    ticket_username:DataTypes.STRING,
    createdBy : DataTypes.STRING
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE
    // last_login:{
    //     type: DataTypes.DATE,
    //     // defaultValue: Date.now,
    // }
},{
    initialAutoIncrement:100000,
    timestamps:true,
    createdAt:true,
    updatedAt: true,
    freezeTableName:true
})

export default Ticket;

// (async() => {
//     await db.sync();
// }
// )();
