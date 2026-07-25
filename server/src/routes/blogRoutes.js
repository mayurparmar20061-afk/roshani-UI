const express = require('express');
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  createComment,
  deleteComment
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getBlogs)
  .post(protect, authorize('admin'), createBlog);

router.route('/:slugOrId')
  .get(getBlog);

router.route('/:id')
  .put(protect, authorize('admin'), updateBlog)
  .delete(protect, authorize('admin'), deleteBlog);

router.route('/:id/comments')
  .post(protect, createComment);

router.route('/:blogId/comments/:commentId')
  .delete(protect, deleteComment);

module.exports = router;
