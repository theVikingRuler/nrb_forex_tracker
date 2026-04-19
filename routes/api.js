const express = require('express');
const router = express.Router();
const forexController = require('../controllers/forexController');

router.get('/rates', forexController.index);

module.exports = router;