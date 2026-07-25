const express = require('express');
const {
  getEnrollments,
  getEnrollment,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment
} = require('../controllers/enrollmentController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect); // All routes require login

router.route('/')
  .get(getEnrollments)
  .post(authorize('student'), createEnrollment);

router.route('/:id')
  .get(getEnrollment)
  .put(authorize('admin'), updateEnrollment)
  .delete(authorize('admin'), deleteEnrollment);

module.exports = router;
