import express from 'express';

import {
    getTicket,
    getTicketById,
    getTicketUsed,
    getTicketByUsername,
    createTicket
} from '../controllers/ticket.js';

const router = express.Router();

router.get('/ticket', getTicket);
router.get('/ticket/id/:id', getTicketById);
router.get('/ticket/used/:used', getTicketUsed);
router.get('/ticket/username/:username', getTicketByUsername);
router.post('/ticket', createTicket);




export default router;