const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');

router.get('/', trainingController.getDashboard);
router.post('/registrar', trainingController.storeEntry);

// ESTA LÍNEA ES VITAL:
module.exports = router;