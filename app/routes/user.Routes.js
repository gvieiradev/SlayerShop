const express = require('express');
const {signUp, login, getAllUsers} = require('../controllers/users');
const { verifyToken } = require('../../config/isAuth');
const router = express.Router();

router.post('/signup', verifyToken, signUp);
router.post('/login', login);
router.get('/allusers', getAllUsers);

module.exports = router;