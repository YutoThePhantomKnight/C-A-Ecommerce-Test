const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/producto.controller');

router
.get('/', ProductController.All)

module.exports = router;