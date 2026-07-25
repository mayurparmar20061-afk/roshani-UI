const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a project description']
  },
  client: {
    type: String,
    default: 'Internal Project'
  },
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  image: {
    type: String,
    default: '/placeholder-project.webp'
  },
  link: {
    type: String,
    default: ''
  },
  tags: {
    type: [String],
    default: []
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Indexes for query optimization
ProjectSchema.index({ createdAt: -1 });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ featured: 1 });

module.exports = mongoose.model('Project', ProjectSchema);
