const express = require('express');
const router = express.Router();
const userController = require('../app/controller/user');
const storageController = require('../app/controller/factory/storage');
const productController = require('../app/controller/product');

router.get('/', userController.verify, (req, res) => {
	if(req.user.access == ['aaa'] || req.user.access == ['aas']){
		return res.redirect('/login');
	};
	res.render('factory/index');
});

router.get('/storage', storageController.index);
router.get('/storage/insert', storageController.insert);
router.get('/storage/withdraw', storageController.withdraw);
router.post('/storage/increaseAmount', storageController.increaseAmount);
router.post('/storage/decreaseAmount', storageController.decreaseAmount);
router.post('/storage/filter', storageController.filter);

module.exports = router;