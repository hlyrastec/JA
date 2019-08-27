const express = require('express');
const router = express.Router();
const userController = require('../app/controller/user');
const productController = require('../app/controller/product');

router.get('/', userController.verify, (req, res) => {
	if(req.user.access == ['aaa'] || req.user.access == ['aas']){
		return res.redirect('/login');
	};
	res.render('factory/index');
});

module.exports = router;