const Instructor = require('../models/Instructor');

// @desc    Get all instructors
// @route   GET /api/instructors
// @access  Public
exports.getInstructors = async (req, res, next) => {
  try {
    const instructors = await Instructor.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: instructors.length,
      data: instructors
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single instructor
// @route   GET /api/instructors/:id
// @access  Public
exports.getInstructor = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById(req.params.id);

    if (!instructor) {
      return res.status(404).json({ success: false, error: 'Instructor not found' });
    }

    res.status(200).json({
      success: true,
      data: instructor
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create instructor
// @route   POST /api/instructors
// @access  Private/Admin
exports.createInstructor = async (req, res, next) => {
  try {
    const { name, biography, specialization, email, image, phone, socialLinks } = req.body;

    const emailExists = await Instructor.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ success: false, error: 'Instructor with email already exists' });
    }

    const instructor = await Instructor.create({
      name,
      biography,
      specialization,
      email,
      image,
      phone,
      socialLinks
    });

    res.status(201).json({
      success: true,
      data: instructor
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update instructor
// @route   PUT /api/instructors/:id
// @access  Private/Admin
exports.updateInstructor = async (req, res, next) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!instructor) {
      return res.status(404).json({ success: false, error: 'Instructor not found' });
    }

    res.status(200).json({
      success: true,
      data: instructor
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete instructor
// @route   DELETE /api/instructors/:id
// @access  Private/Admin
exports.deleteInstructor = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById(req.params.id);

    if (!instructor) {
      return res.status(404).json({ success: false, error: 'Instructor not found' });
    }

    await instructor.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Instructor deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
