const validator = require('validator');

// Basic register request validation
exports.validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  if (!name || validator.isEmpty(name.trim())) {
    errors.push('Name is required');
  }

  if (!email || !validator.isEmail(email)) {
    errors.push('Please enter a valid email address');
  }

  if (!password || !validator.isLength(password, { min: 6 })) {
    errors.push('Password must be at least 6 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, error: errors.join(', ') });
  }

  next();
};

// Basic login request validation
exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email || !validator.isEmail(email)) {
    errors.push('Please enter a valid email address');
  }

  if (!password || validator.isEmpty(password)) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, error: errors.join(', ') });
  }

  next();
};

// Generic validation helper that can check specific required fields
exports.validateRequiredFields = (fields) => {
  return (req, res, next) => {
    const missingFields = [];
    fields.forEach(field => {
      if (req.body[field] === undefined || req.body[field] === null || (typeof req.body[field] === 'string' && validator.isEmpty(req.body[field].trim()))) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    next();
  };
};
