const express = require('express');
const login = require('../controllers/authController'); // Import login correctly
const router = express.Router();

router.get('/login', login); // Use the correct callback function

module.exports = router;
