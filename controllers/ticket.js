import Ticket from "../models/ticket.js";

export const getTicket = async(req, res) => {
    try {
        const response = await Ticket.findAll();
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }

}

export const getTicketById = async(req, res) => {
    try {
        const response = await Ticket.findOne({
            where:{
                ticket_id: req.params.id
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const getTicketUsed = async(req, res) => {
    try {
        const response = await Ticket.findAll({
            where:{
                ticket_used: req.params.used
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const getTicketByUsername = async(req, res) => {
    try {
        const response = await Ticket.findOne({
            where:{
                ticket_username: req.params.username
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const createTicket = async(req, res) => {
    try {
        const response = await Ticket.create(req.body);
        res.status(200).json({
            msg: "Ticket Created",
            response: response
        });
    }
    catch(error){
        console.log(error.message)
    }
}