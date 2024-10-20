import express from 'express';
import {signUp, login, getAllUsers} from '../controllers/users.js';
import {validateSchema} from "../middleware/validator.middleware.js";
import { registerSchema } from '../schema/auth.schema.js';
import { verifyToken } from '../../config/isAuth.js';
const router = express.Router();

router.post('/signup', validateSchema(registerSchema), signUp);
router.post('/login', login);
router.get('/allusers', verifyToken, getAllUsers);

export default router;