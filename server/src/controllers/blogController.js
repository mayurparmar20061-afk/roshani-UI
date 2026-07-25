const Blog = require('../models/Blog');

// @desc    Get all blogs (with pagination, search & tag filter)
// @route   GET /api/blogs
// @access  Public
exports.getBlogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 6, search, tag } = req.query;
    const query = {};

    // Search query in title or content
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    // Tag filter
    if (tag) {
      query.tags = tag;
    }

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    res.status(200).json({
      success: true,
      count: blogs.length,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit)
      },
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug or id
// @route   GET /api/blogs/:slugOrId
// @access  Public
// exports.getBlog = async (req, res, next) => {
exports.getBlog = async (req, res, next) => {
  try {
    const { slugOrId } = req.params;
    let blog;

    // Check if ID (looks like mongoose ObjectId) or slug
    if (slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(slugOrId).populate('author', 'name').lean();
    } else {
      blog = await Blog.findOne({ slug: slugOrId }).populate('author', 'name').lean();
    }

    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Create blog
// @route   POST /api/blogs
// @access  Private/Admin
exports.createBlog = async (req, res, next) => {
  try {
    // Add user as author
    req.body.author = req.user.id;
    req.body.authorName = req.user.name;

    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
exports.updateBlog = async (req, res, next) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    // Only creator or admin can update
    if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to update this blog' });
    }

    blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    // Only creator or admin can delete
    if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to delete this blog' });
    }

    await blog.deleteOne();
    res.status(200).json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Create comment on blog
// @route   POST /api/blogs/:id/comments
// @access  Private
exports.createComment = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, error: 'Please add comment content' });
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    const comment = {
      userId: req.user.id,
      userName: req.user.name,
      content
    };

    blog.comments.push(comment);
    await blog.save();

    res.status(201).json({ success: true, data: blog.comments });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete comment on blog
// @route   DELETE /api/blogs/:blogId/comments/:commentId
// @access  Private
exports.deleteComment = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }

    // Find the comment
    const comment = blog.comments.id(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }

    // Verify ownership or admin role
    if (comment.userId.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to delete this comment' });
    }

    comment.deleteOne();
    await blog.save();

    res.status(200).json({ success: true, data: blog.comments });
  } catch (error) {
    next(error);
  }
};
