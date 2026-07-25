const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

// @desc    Get all enrollments
// @route   GET /api/enrollments
// @access  Private
exports.getEnrollments = async (req, res, next) => {
  try {
    let queryObj = {};

    // If student, filter by their student ID
    if (req.user.role === 'student') {
      queryObj.student = req.user.id;
    } else {
      // Admin filter options
      if (req.query.student) queryObj.student = req.query.student;
      if (req.query.course) queryObj.course = req.query.course;
      if (req.query.status) queryObj.status = req.query.status;
    }

    const enrollments = await Enrollment.find(queryObj)
      .populate('course', 'title image price duration level')
      .populate('student', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: enrollments.length,
      data: enrollments
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single enrollment
// @route   GET /api/enrollments/:id
// @access  Private
exports.getEnrollment = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id)
      .populate('course', 'title description duration level price image syllabus')
      .populate('student', 'name email');

    if (!enrollment) {
      return res.status(404).json({ success: false, error: 'Enrollment not found' });
    }

    // Check if the student owns this enrollment
    if (req.user.role === 'student' && enrollment.student._id.toString() !== req.user.id) {
      return res.status(403).json({ success: false, error: 'Not authorized to access this enrollment' });
    }

    res.status(200).json({
      success: true,
      data: enrollment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Enroll in a course
// @route   POST /api/enrollments
// @access  Private/Student
exports.createEnrollment = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const studentId = req.user.id;

    if (!courseId) {
      return res.status(400).json({ success: false, error: 'Please provide course ID' });
    }

    // Check if course exists
    const courseObj = await Course.findById(courseId);
    if (!courseObj) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    // Check if student is already enrolled
    const alreadyEnrolled = await Enrollment.findOne({ student: studentId, course: courseId });
    if (alreadyEnrolled) {
      return res.status(400).json({ success: false, error: 'Already enrolled in this course' });
    }

    const enrollment = await Enrollment.create({
      student: studentId,
      course: courseId,
      status: 'active'
    });

    const populatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate('course', 'title duration')
      .populate('student', 'name email');

    res.status(201).json({
      success: true,
      data: populatedEnrollment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update enrollment (status, progress, certificateUrl)
// @route   PUT /api/enrollments/:id
// @access  Private/Admin
exports.updateEnrollment = async (req, res, next) => {
  try {
    const { status, progress, certificateUrl } = req.body;
    let enrollment = await Enrollment.findById(req.params.id);

    if (!enrollment) {
      return res.status(404).json({ success: false, error: 'Enrollment not found' });
    }

    enrollment.status = status || enrollment.status;
    if (progress !== undefined) enrollment.progress = progress;
    if (certificateUrl !== undefined) enrollment.certificateUrl = certificateUrl;

    // Automatically set status to completed if progress reaches 100
    if (enrollment.progress === 100) {
      enrollment.status = 'completed';
    }

    await enrollment.save();

    const updatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate('course', 'title duration')
      .populate('student', 'name email');

    res.status(200).json({
      success: true,
      data: updatedEnrollment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Cancel/Delete enrollment
// @route   DELETE /api/enrollments/:id
// @access  Private/Admin
exports.deleteEnrollment = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);

    if (!enrollment) {
      return res.status(404).json({ success: false, error: 'Enrollment not found' });
    }

    await enrollment.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Enrollment deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
