const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add an instructor name'],
    trim: true
  },
  biography: {
    type: String,
    required: [true, 'Please add a biography']
  },
  specialization: {
    type: String,
    required: [true, 'Please add a specialization']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  image: {
    type: String,
    default: '/placeholder-instructor.webp'
  },
  phone: {
    type: String
  },
  socialLinks: {
    linkedin: String,
    twitter: String,
    website: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Instructor', InstructorSchema);
