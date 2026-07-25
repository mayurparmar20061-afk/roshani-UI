const express = require('express');
const {
  getAll,
  create,
  update,
  delete: deletePost
} = require('../controllers/posts');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getAll)
  .post(protect, create);

router.route('/:id')
  .put(protect, update)
  .delete(protect, deletePost);

module.exports = router;
