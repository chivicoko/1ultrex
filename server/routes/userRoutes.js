const express = require('express');
const { registerUser, getMe, getAllUsers, deleteUser, findUserDeposits, loginUser } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/allUsers', getAllUsers);
router.post('/deleteUser', deleteUser);
router.get('/findUserDeposits', findUserDeposits);

module.exports = router;