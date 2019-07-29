const express = require('express');
const router = express.Router();
const userController = require('../app/controller/user');
const productController = require('../app/controller/store/product');
const customerController = require('../app/controller/store/customer');
const cashierController = require('../app/controller/store/cashier');
const saleController = require('../app/controller/store/sale');

router.get('/', userController.verify, (req, res) => {
	if(req.user.access == ['aaa'] || req.user.access == ['aas']){
		return res.redirect('/login');
	};
	res.render('store/index');
});

router.get('/product', productController.index);
router.post('/product/get', productController.get);
router.post('/product/filter', productController.filter);
router.post('/product/show', productController.get);

router.post('/customer/save', customerController.save);
router.post('/customer/findByCpf', customerController.findByCpf);

router.get('/cashier', cashierController.index);

router.get('/sales', saleController.index);
router.post('/sale/save', saleController.save);
router.post('/sale/filter', saleController.filter);
router.post('/sale/print', saleController.print);

module.exports = router;