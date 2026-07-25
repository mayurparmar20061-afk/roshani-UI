const express = require('express');
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequiredFields } = require('../middleware/validateMiddleware');

const router = express.Router();

// Require auth for all student routes
router.use(protect);

router.route('/')
  .get(authorize('admin'), getStudents)
  .post(authorize('admin'), validateRequiredFields(['name', 'email', 'password']), createStudent);

router.route('/:id')
  .get(getStudent)
  .put(updateStudent)
  .delete(authorize('admin'), deleteStudent);

module.exports = router;
