const express = require('express');
const router = express.Router();
const userController = require('../app/controller/user');
const productController = require('../app/controller/factory/product');

router.get('/', userController.verify, (req, res) => {
	if(req.user.access == ['aaa'] || req.user.access == ['aas']){
		return res.redirect('/login');
	};
	res.render('factory/index');
});

router.get('/product', productController.index);
router.post('/product/save', productController.save);
router.post('/product/show', productController.get);
router.post('/product/filter', productController.filter);
router.post('/product/remove', productController.remove);
router.post('/product/addImage', productController.addImage);
router.post('/product/removeImage', productController.removeImage);
router.post('/product/addType', productController.addType);
router.get('/product/getTypes', productController.getTypes);
router.post('/product/addColor', productController.addColor);
router.get('/product/getColors', productController.getColors);

module.exports = router;