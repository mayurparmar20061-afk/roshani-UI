const express = require('express');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequiredFields } = require('../middleware/validateMiddleware');

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(protect, authorize('admin'), validateRequiredFields(['name', 'description']), createCategory);

router.route('/:idOrSlug')
  .get(getCategory);

router.route('/:id')
  .put(protect, authorize('admin'), updateCategory)
  .delete(protect, authorize('admin'), deleteCategory);

module.exports = router;
