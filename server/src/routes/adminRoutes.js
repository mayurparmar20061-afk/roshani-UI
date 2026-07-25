const express = require('express');
const {
  getStats,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// All routes here require auth and admin role
router.use(protect);
router.use(authorize('admin'));

router.get('/stats', getStats);

router.route('/users')
  .get(getUsers)
  .post(createUser);

router.route('/users/:id')
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
