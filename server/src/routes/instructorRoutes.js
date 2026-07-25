const express = require('express');
const {
  getInstructors,
  getInstructor,
  createInstructor,
  updateInstructor,
  deleteInstructor
} = require('../controllers/instructorController');

const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequiredFields } = require('../middleware/validateMiddleware');

const router = express.Router();

router.route('/')
  .get(getInstructors)
  .post(protect, authorize('admin'), validateRequiredFields(['name', 'biography', 'specialization', 'email']), createInstructor);

router.route('/:id')
  .get(getInstructor)
  .put(protect, authorize('admin'), updateInstructor)
  .delete(protect, authorize('admin'), deleteInstructor);

module.exports = router;
