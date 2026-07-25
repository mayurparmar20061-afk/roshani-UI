const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a service title'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a service description']
  },
  icon: {
    type: String,
    default: 'Layers' // Name of the Lucide icon
  },
  category: {
    type: String,
    required: [true, 'Please specify a category'],
    trim: true
  },
  price: {
    type: String,
    default: 'Contact for Quote'
  },
  features: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

// Indexes for query optimization
ServiceSchema.index({ createdAt: -1 });
ServiceSchema.index({ category: 1 });

module.exports = mongoose.model('Service', ServiceSchema);
