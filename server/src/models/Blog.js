const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a blog title'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  content: {
    type: String,
    required: [true, 'Please add blog content']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  authorName: {
    type: String,
    default: 'Admin'
  },
  image: {
    type: String,
    default: '/placeholder-blog.webp'
  },
  tags: {
    type: [String],
    default: []
  },
  comments: [CommentSchema],
  readTime: {
    type: String,
    default: '5 min read'
  }
}, {
  timestamps: true
});

// Index for pagination and sorting
BlogSchema.index({ createdAt: -1 });
// Text index for search functionality
BlogSchema.index({ title: 'text', content: 'text' });

// Simple pre-save slug generator
BlogSchema.pre('save', function(next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  next();
});

module.exports = mongoose.model('Blog', BlogSchema);
