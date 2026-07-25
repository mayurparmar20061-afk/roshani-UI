const Admission = require('../models/Admission');
const validator = require('validator');

// @desc    Submit student admission form
// @route   POST /api/admissions
// @access  Public
exports.submitAdmission = async (req, res, next) => {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      dateOfBirth,
      highestQualification,
      selectedCourse,
      address,
      message
    } = req.body;

    // Validation
    if (!fullName || !mobileNumber || !email || !dateOfBirth || !highestQualification || !selectedCourse || !address) {
      return res.status(400).json({
        success: false,
        error: 'Please fill all required fields.'
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    const cleanedPhone = mobileNumber.replace(/\s+/g, '').replace(/^\+91/, '');
    if (!/^\d{10}$/.test(cleanedPhone)) {
      return res.status(400).json({
        success: false,
        error: 'Mobile number must contain exactly 10 digits.'
      });
    }

    // Check for duplicate email
    const duplicate = await Admission.findOne({ email: email.toLowerCase() });
    if (duplicate) {
      return res.status(400).json({
        success: false,
        error: 'An admission application with this email address has already been submitted.'
      });
    }

    // Create admission
    const admission = await Admission.create({
      fullName,
      mobileNumber: cleanedPhone,
      email: email.toLowerCase(),
      dateOfBirth,
      highestQualification,
      selectedCourse,
      address,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Your admission application has been submitted successfully. Our team will contact you soon.',
      data: {
        applicationId: admission.applicationId,
        fullName: admission.fullName,
        email: admission.email
      }
    });
  } catch (error) {
    next(error);
  }
};
