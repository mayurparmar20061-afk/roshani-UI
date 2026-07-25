const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    match: [/^\d{10}$/, 'Mobile number must be exactly 10 digits']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  highestQualification: {
    type: String,
    required: [true, 'Highest qualification is required']
  },
  selectedCourse: {
    type: String,
    required: [true, 'Selected course is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  message: {
    type: String
  },
  applicationId: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Approved', 'Rejected']
  }
}, {
  timestamps: true
});

AdmissionSchema.pre('save', async function (next) {
  if (!this.applicationId) {
    const year = new Date().getFullYear();
    const count = await mongoose.models.Admission.countDocuments();
    const sequentialNum = String(count + 1).padStart(5, '0');
    this.applicationId = `RT${year}${sequentialNum}`;
  }
  next();
});

module.exports = mongoose.model('Admission', AdmissionSchema);
