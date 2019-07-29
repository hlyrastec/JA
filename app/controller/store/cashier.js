const userController = require('../user');
const Product = require('../../model/store/product');
const Jobs = require('../../model/job');

const cashierController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['prp','grf','cof','dvp','spt','aaf'])){
			return res.redirect('/login');
		};
		res.render('store/cashier/index');
	}
};

module.exports = cashierController;