const express = require('express');
const router = express.Router();
const { RegisterUser, Userlogin } = require('../controllers/userController');
// routes
    router.post('/register',RegisterUser);
    router.post('/login', Userlogin);


module.exports = router;