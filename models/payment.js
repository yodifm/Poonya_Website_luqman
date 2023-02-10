import {Sequelize} from "sequelize";

import db from "../config/database.js";

const {DataTypes} = Sequelize

const Ticket = db.define('payment', {
    transaction_number:{
        type :DataTypes.STRING, 
        primaryKey:true,
        // autoIncrement:true,
    }, // Random huruf dan angka
    // ticket_number:DataTypes.STRING,
    ticket_id:DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    pay_status:DataTypes.STRING,
    payment_method: DataTypes.STRING,
    totalprice: DataTypes.STRING,
    username:DataTypes.STRING
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE
    // last_login:{
    //     type: DataTypes.DATE,
    //     // defaultValue: Date.now,
    // }
},{
    // initialAutoIncrement:100000,
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
