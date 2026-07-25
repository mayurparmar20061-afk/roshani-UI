const User = require('../models/User');

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
exports.getStudents = async (req, res, next) => {
  try {
    const students = await User.find({ role: 'student' }).sort({ createdAt: -1 }).lean();
    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single student profile
// @route   GET /api/students/:id
// @access  Private/Admin or Student (self)
exports.getStudent = async (req, res, next) => {
  try {
    // If student, they can only view their own profile
    if (req.user.role === 'student' && req.user.id !== req.params.id) {
      return res.status(403).json({ success: false, error: 'Unauthorized to view this student profile' });
    }

    const student = await User.findOne({ _id: req.params.id, role: 'student' });
    if (!student) {
      return res.status(404).json({ success: false, error: 'Student not found' });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create student
// @route   POST /api/students
// @access  Private/Admin
exports.createStudent = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, error: 'User with this email already exists' });
    }

    const student = await User.create({
      name,
      email,
      password,
      role: 'student',
      isVerified: true
    });

    res.status(201).json({
      success: true,
      data: {
        id: student._id,
        name: student.name,
        email: student.email,
        role: student.role,
        isVerified: student.isVerified
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update student details
// @route   PUT /api/students/:id
// @access  Private/Admin or Student (self)
exports.updateStudent = async (req, res, next) => {
  try {
    // If student, they can only update their own profile
    if (req.user.role === 'student' && req.user.id !== req.params.id) {
      return res.status(403).json({ success: false, error: 'Unauthorized to update this profile' });
    }

    const { name, email, isVerified } = req.body;
    const student = await User.findOne({ _id: req.params.id, role: 'student' });

    if (!student) {
      return res.status(404).json({ success: false, error: 'Student not found' });
    }

    student.name = name || student.name;
    student.email = email || student.email;
    
    // Only admin can toggle verification state
    if (req.user.role === 'admin' && isVerified !== undefined) {
      student.isVerified = isVerified;
    }

    await student.save();

    res.status(200).json({
      success: true,
      data: {
        id: student._id,
        name: student.name,
        email: student.email,
        role: student.role,
        isVerified: student.isVerified
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private/Admin
exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await User.findOne({ _id: req.params.id, role: 'student' });
    if (!student) {
      return res.status(404).json({ success: false, error: 'Student not found' });
    }

    await student.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Student profile deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
