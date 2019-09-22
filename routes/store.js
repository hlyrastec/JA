const express = require('express');
const router = express.Router();
const userController = require('../app/controller/user');
const customerController = require('../app/controller/customer');
const cashierController = require('../app/controller/store/cashier');
const orderController = require('../app/controller/store/order');

router.get('/', userController.verify, (req, res) => {
	if(req.user.access == ['aaa'] || req.user.access == ['aas']){
		return res.redirect('/login');
	};
	res.render('store/index');
});

router.post('/customer/save', customerController.save);
router.post('/customer/findByCpf', customerController.findByCpf);

router.get('/cashier', cashierController.index);

router.get('/orders', orderController.index);
router.post('/order/save', orderController.save);
router.post('/order/filter', orderController.filter);
router.post('/order/get', orderController.get);

module.exports = router;