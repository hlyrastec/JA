const express = require('express');
const router = express.Router();
const productController = require('../app/controller/product');

router.get('/', productController.index);
router.get('/config', productController.config);
router.post('/save', productController.save);
router.post('/show', productController.get);
router.post('/filter', productController.filter);
router.post('/remove', productController.remove);
router.post('/addImage', productController.addImage);
router.post('/removeImage', productController.removeImage);
router.post('/addType', productController.addType);
router.get('/getTypes', productController.getTypes);
router.post('/addColor', productController.addColor);
router.get('/getColors', productController.getColors);

module.exports = router;