const express = require('express');
const { registerUser, getMe, getAllUsers, loginUser } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/allUsers', getAllUsers);

module.exports = router;