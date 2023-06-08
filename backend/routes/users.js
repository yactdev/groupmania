const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signup', userController.singUp);
router.post('/signIn', userController.singIn);
router.get('/', auth, userController.findAll);

module.exports = router;
