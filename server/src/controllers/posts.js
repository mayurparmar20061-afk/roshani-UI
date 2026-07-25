const Post = require('../models/Post');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
exports.getAll = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    next(new ErrorResponse('Failed to fetch posts', 500));
  }
};

// @desc    Create post
// @route   POST /api/posts
// @access  Private
exports.create = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newPost = await Post.create({
      title,
      content,
      userId: req.user.id,
      username: req.user.name || req.user.username || 'Anonymous'
    });

    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
exports.update = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check post ownership
    if (post.userId.toString() !== req.user.id.toString()) {
      return res.status(403).json({ error: 'Access denied. You can only update your own posts.' });
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
exports.delete = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check post ownership
    if (post.userId.toString() !== req.user.id.toString()) {
      return res.status(403).json({ error: 'Access denied. You can only delete your own posts.' });
    }

    await post.deleteOne();

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};
