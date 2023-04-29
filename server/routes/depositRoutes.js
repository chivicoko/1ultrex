const express = require('express');
const router = express.Router();
const { getDeposits, setDeposit, updateDeposit, deleteDeposit } = require('../controllers/depositController');
const { protect } = require('../middlewares/authMiddleware');


router.route('/').get(protect, getDeposits).post(protect, setDeposit);
router.route('/:id').put(protect, updateDeposit).delete(protect, deleteDeposit);


module.exports = router;