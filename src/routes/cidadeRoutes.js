const express = require('express');
const router = express.Router()

const cidadeController = require('../controllers/cidade.controller')

router.get('/', cidadeController.getCidade)

module.exports = router;