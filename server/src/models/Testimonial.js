const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a client name'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Please add a client role'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Please add a client company'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Please add testimonial content']
  },
  image: {
    type: String,
    default: '/placeholder-avatar.webp'
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating between 1 and 5'],
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true
});

// Index for query optimization
TestimonialSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
