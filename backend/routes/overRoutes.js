const express = require('express');
const { getOverSummary } = require('../controllers/overController');

const router = express.Router();

router.get('/api/overs', getOverSummary);

module.exports = router;
