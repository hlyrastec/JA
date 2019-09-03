const express = require('express');
const router = express.Router();
const userController = require('../app/controller/user');
const customerController = require('../app/controller/store/customer');
const cashierController = require('../app/controller/store/cashier');
const saleController = require('../app/controller/store/sale');

router.get('/', userController.verify, (req, res) => {
	if(req.user.access == ['aaa'] || req.user.access == ['aas']){
		return res.redirect('/login');
	};
	res.render('store/index');
});

router.post('/customer/save', customerController.save);
router.post('/customer/findByCpf', customerController.findByCpf);

router.get('/cashier', cashierController.index);

router.get('/sales', saleController.index);
router.post('/sale/save', saleController.save);
router.post('/sale/filter', saleController.filter);
router.post('/sale/get', saleController.get);

module.exports = router;