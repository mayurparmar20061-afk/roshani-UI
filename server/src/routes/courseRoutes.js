const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');

const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequiredFields } = require('../middleware/validateMiddleware');

const router = express.Router();

router.route('/')
  .get(getCourses)
  .post(protect, authorize('admin'), validateRequiredFields(['title', 'description', 'instructor', 'category', 'price']), createCourse);

router.route('/:id')
  .get(getCourse)
  .put(protect, authorize('admin'), updateCourse)
  .delete(protect, authorize('admin'), deleteCourse);

module.exports = router;
