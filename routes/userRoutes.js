const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
router.get('/users/:userId', UserController.getUser);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);
module.exports = router;
