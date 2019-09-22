const express = require('express');
const router = express.Router();
const customerController = require('../app/controller/customer');

router.post('/save', customerController.save);
router.post('/findByCpf', customerController.findByCpf);

module.exports = router;