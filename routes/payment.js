import express from 'express';

import {
    getPayment,
    getPaymentByTicketId,
    getPaymentByUsername,
    getPaymentByNumber,
    getPaymentByStatus,
    createPayment
} from '../controllers/payment.js';

const router = express.Router();

router.get('/payment', getPayment);
router.get('/payment/ticketid/:ticket_id', getPaymentByTicketId);
router.get('/payment/username/:username', getPaymentByUsername);
router.get('/payment/number/:transaction_number', getPaymentByNumber);
router.get('/payment/status/:pay_status', getPaymentByStatus);
router.post('/payment', createPayment);




export default router;