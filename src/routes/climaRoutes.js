const express = require('express');
const router = express.Router()

const climaController = require('../controllers/clima.controller')

router.get('/', climaController.getClima)

module.exports = router;