const express = require('express');
const router = express.Router();
const homeController = require('../app/controller/home');

/* GET home page. */
router.get('/', homeController.index);
router.get('/login', homeController.login);
router.get('/signup', homeController.signup);
router.get('/logout', homeController.logout);

router.get('/support', homeController.support);

router.use('/user', require('./user'));
router.use('/admin', require('./admin'));
router.use('/product', require('./product'));
router.use('/customer', require('./customer'));
router.use('/factory', require('./factory'));
router.use('/store', require('./store'));
router.use('/catalog', require('./catalog'));

module.exports = router;