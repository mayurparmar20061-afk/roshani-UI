const User = require('../models/User');
const Service = require('../models/Service');
const Project = require('../models/Project');
const Blog = require('../models/Blog');
const Message = require('../models/Message');
const Testimonial = require('../models/Testimonial');
const Course = require('../models/Course');
const Category = require('../models/Category');
const Instructor = require('../models/Instructor');
const Enrollment = require('../models/Enrollment');
const FAQ = require('../models/FAQ');
const Gallery = require('../models/Gallery');

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
exports.getStats = async (req, res, next) => {
  try {
    const userCount = await User.countDocuments();
    const studentCount = await User.countDocuments({ role: 'student' });
    const adminCount = await User.countDocuments({ role: 'admin' });
    const serviceCount = await Service.countDocuments();
    const projectCount = await Project.countDocuments();
    const blogCount = await Blog.countDocuments();
    const messageCount = await Message.countDocuments();
    const testimonialCount = await Testimonial.countDocuments();
    const courseCount = await Course.countDocuments();
    const categoryCount = await Category.countDocuments();
    const instructorCount = await Instructor.countDocuments();
    const enrollmentCount = await Enrollment.countDocuments();
    const faqCount = await FAQ.countDocuments();
    const galleryCount = await Gallery.countDocuments();

    // Get recent data
    const recentMessages = await Message.find().sort({ createdAt: -1 }).limit(5).lean();
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).lean();

    // Dynamic graph simulation data
    const monthlyAnalytics = [
      { month: 'Jan', visitors: 1200, messages: 12 },
      { month: 'Feb', visitors: 1900, messages: 25 },
      { month: 'Mar', visitors: 3000, messages: 45 },
      { month: 'Apr', visitors: 2500, messages: 30 },
      { month: 'May', visitors: 4200, messages: 60 },
      { month: 'Jun', visitors: 5800, messages: 85 }
    ];

    res.status(200).json({
      success: true,
      data: {
        counts: {
          users: userCount,
          students: studentCount,
          admins: adminCount,
          services: serviceCount,
          projects: projectCount,
          blogs: blogCount,
          messages: messageCount,
          testimonials: testimonialCount,
          courses: courseCount,
          categories: categoryCount,
          instructors: instructorCount,
          enrollments: enrollmentCount,
          faqs: faqCount,
          gallery: galleryCount
        },
        recentMessages,
        recentUsers,
        monthlyAnalytics
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a user
// @route   POST /api/admin/users
// @access  Private/Admin
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, role, isVerified } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'student',
      isVerified: isVerified || false
    });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
exports.updateUser = async (req, res, next) => {
  try {
    const { name, email, role, isVerified } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    if (isVerified !== undefined) {
      user.isVerified = isVerified;
    }

    await user.save();

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Don't let admin delete themselves
    if (user._id.toString() === req.user.id.toString()) {
      return res.status(400).json({ success: false, error: 'You cannot delete yourself' });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
