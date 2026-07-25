const express = require('express');
const {
  sendMessage,
  getMessages,
  markAsRead,
  deleteMessage
} = require('../controllers/messageController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(sendMessage)
  .get(protect, authorize('admin'), getMessages);

router.route('/:id')
  .put(protect, authorize('admin'), markAsRead)
  .delete(protect, authorize('admin'), deleteMessage);

module.exports = router;
