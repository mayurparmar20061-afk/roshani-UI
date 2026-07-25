const express = require('express');
const {
  getFAQs,
  getFAQ,
  createFAQ,
  updateFAQ,
  deleteFAQ
} = require('../controllers/faqController');

const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequiredFields } = require('../middleware/validateMiddleware');

const router = express.Router();

router.route('/')
  .get(getFAQs)
  .post(protect, authorize('admin'), validateRequiredFields(['question', 'answer']), createFAQ);

router.route('/:id')
  .get(getFAQ)
  .put(protect, authorize('admin'), updateFAQ)
  .delete(protect, authorize('admin'), deleteFAQ);

module.exports = router;
