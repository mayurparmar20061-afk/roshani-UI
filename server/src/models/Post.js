const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a post title'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Please add post content']
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Convert _id to id virtual on serialization to match the frontend expectations
PostSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

PostSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

// Indexes for query optimization
PostSchema.index({ createdAt: -1 });
PostSchema.index({ userId: 1 });

module.exports = mongoose.model('Post', PostSchema);
