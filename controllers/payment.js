import Payment from "../models/payment.js";

function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

export const getPayment = async(req, res) => {
    try {
        const response = await Payment.findAll();
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }

}

export const getPaymentByTicketId = async(req, res) => {
    try {
        const response = await Payment.findOne({
            where:{
                ticket_id: req.params.ticket_id
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const getPaymentByStatus = async(req, res) => {
    try {
        const response = await Payment.findAll({
            where:{
                pay_status: req.params.pay_status
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}


export const getPaymentByUsername = async(req, res) => {
    try {
        const response = await Payment.findOne({
            where:{
                username: req.params.username
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const getPaymentByNumber = async(req, res) => {
    try {
        const response = await Payment.findOne({
            where:{
                transaction_number: req.params.transaction_number
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const createPayment = async(req, res) => {
    try {
        var rndm =  randomString(5)
        var send = {
            transaction_number: rndm,
            ticket_id: req.body.ticket_id,
            quatity: req.body.quantity,
            pay_status: req.body.pay_status,
            payment_method: req.body.payment_method,
            totalprice: req.body.totalprice,
            username: req.body.username,
        }
        const response = await Payment.create(send);
        res.status(200).json({
            msg: "Payment Created",
            response: response
        });
    }
    catch(error){
        console.log(error.message)
    }
}