const express = require('express');
const {
  getGalleryItems,
  getGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
} = require('../controllers/galleryController');

const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequiredFields } = require('../middleware/validateMiddleware');

const router = express.Router();

router.route('/')
  .get(getGalleryItems)
  .post(protect, authorize('admin'), validateRequiredFields(['title', 'image', 'category']), createGalleryItem);

router.route('/:id')
  .get(getGalleryItem)
  .put(protect, authorize('admin'), updateGalleryItem)
  .delete(protect, authorize('admin'), deleteGalleryItem);

module.exports = router;
