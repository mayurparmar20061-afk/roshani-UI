const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a gallery title'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Please add a gallery image URL']
  },
  category: {
    type: String,
    required: [true, 'Please add a gallery category'],
    trim: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gallery', GallerySchema);
