import express from 'express';

import {
    getUsers,
    getUsersById,
    getUsersByUsername,
    getUsersByRoles,
    createUser
} from '../controllers/users.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/id/:id', getUsersById);
router.get('/users/username/:username', getUsersByUsername);
router.get('/users/roles/:roles', getUsersByRoles);
router.post('/users', createUser);




export default router;