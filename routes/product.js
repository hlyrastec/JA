const express = require('express');
const router = express.Router();
const productController = require('../app/controller/product');

router.get('/', productController.index);
router.get('/config', productController.config);
router.post('/save', productController.save);
router.post('/get', productController.get);
router.post('/filter', productController.filter);
router.post('/remove', productController.remove);
router.post('/addImage', productController.addImage);
router.post('/removeImage', productController.removeImage);
router.post('/categorySave', productController.categorySave);
router.get('/categoryList', productController.categoryList);
router.post('/colorSave', productController.colorSave);
router.get('/colorList', productController.colorList);

module.exports = router;