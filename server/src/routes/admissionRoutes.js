const express = require('express');
const { submitAdmission } = require('../controllers/admissionController');

const router = express.Router();

router.route('/')
  .post(submitAdmission);

module.exports = router;
