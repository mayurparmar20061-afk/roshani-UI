const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const errorHandler = require('./middleware/errorMiddleware');
const upload = require('./middleware/uploadMiddleware');

// Route imports
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const blogRoutes = require('./routes/blogRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const messageRoutes = require('./routes/messageRoutes');
const adminRoutes = require('./routes/adminRoutes');
const postRoutes = require('./routes/postRoutes');
const courseRoutes = require('./routes/courseRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const faqRoutes = require('./routes/faqRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const admissionRoutes = require('./routes/admissionRoutes');

const app = express();

// Security Middlewares
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow loading images from backend locally
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://fonts.googleapis.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "blob:", "https://images.unsplash.com", "*"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      connectSrc: ["'self'", "*"],
    },
  }
}));

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5500',
  'http://localhost:5000',
  'null'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || origin === 'null') return callback(null, true);
    if (
      allowedOrigins.indexOf(origin) !== -1 || 
      origin.startsWith('http://localhost:') || 
      origin.startsWith('http://127.0.0.1:') ||
      origin.endsWith('.netlify.app') ||
      origin.endsWith('.vercel.app')
    ) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// General Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per windowMs for general API
  message: { success: false, error: 'Too many requests from this IP, please try again after 15 minutes' }
});
app.use('/api/', limiter);

// Stricter Auth Rate Limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 auth attempts per IP
  message: { success: false, error: 'Too many authentication attempts. Please try again after 15 minutes' }
});
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
app.use('/api/auth/forgot-password', authLimiter);

// Body Parser
app.use(express.json());

// Set static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/admissions', admissionRoutes);

// File Upload endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.status(200).json({
      success: true,
      url: `/uploads/${req.file.filename}`
    });
  } else {
    res.status(400).json({
      success: false,
      error: 'Please upload a file'
    });
  }
});

// Root route API Doc
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to Roshani DevLabs API',
    endpoints: {
      auth: '/api/auth',
      services: '/api/services',
      projects: '/api/projects',
      blogs: '/api/blogs',
      testimonials: '/api/testimonials',
      messages: '/api/messages',
      admin: '/api/admin',
      posts: '/api/posts',
      courses: '/api/courses',
      categories: '/api/categories',
      instructors: '/api/instructors',
      students: '/api/students',
      enrollments: '/api/enrollments',
      faqs: '/api/faqs',
      gallery: '/api/gallery',
      upload: '/api/upload [POST]'
    }
  });
});

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
