const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a course description']
  },
  duration: {
    type: String,
    required: [true, 'Please add course duration (e.g. 6 weeks)'],
    default: '8 weeks'
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Intermediate'
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor',
    required: [true, 'Please associate an instructor']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Please associate a category']
  },
  price: {
    type: Number,
    required: [true, 'Please add a course price'],
    min: 0,
    default: 0
  },
  image: {
    type: String,
    default: '/placeholder-course.webp'
  },
  syllabus: {
    type: [String],
    default: []
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Indexes for sorting/filtering
CourseSchema.index({ createdAt: -1 });
CourseSchema.index({ level: 1 });
CourseSchema.index({ isPublished: 1 });
CourseSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Course', CourseSchema);
