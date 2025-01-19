const express = require('express');
const { getOversSummary } = require('../controllers/overController');

const router = express.Router();

router.get('/api/overs', getOversSummary);

module.exports = router;
