import express from 'express';
import {signUp, login, getAllUsers} from '../controllers/users.js';
import { verifyToken } from '../../config/isAuth.js';
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/allusers', verifyToken, getAllUsers);

export default router;