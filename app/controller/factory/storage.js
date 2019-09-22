const userController = require('../user');
const Product = require('../../model/product');
const Storage = require('../../model/factory/storage');
const Jobs = require('../../model/job');

const storageController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf'])){
			return res.redirect('/login');
		};
		res.render('factory/storage/index');
	},
	insert: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf'])){
			return res.redirect('/login');
		};
		res.render('factory/storage/insert');
	},
	increaseAmount: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf'])){
			res.send({ unauthorized: "Usuário não autorizado."});
		};

		if(!req.body.origin){
			return res.send({ msg: 'Selecione a origem da entrada!' });
		};

		let products = JSON.parse(req.body.products);
		if(!products.length){
			return res.send({ msg: 'Selecione os produtos que deseja inserir!' });
		};

		for(i in products){
			await Storage.increaseAmount(products[i]);
		};

		res.send({ done: 'Os produtos foram inseridos no estoque com sucesso!' });
	},
	withdraw: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf'])){
			return res.redirect('/login');
		};
		res.render('factory/storage/withdraw');
	},
	decreaseAmount: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf'])){
			res.send({ unauthorized: "Usuário não autorizado."});
		};

		if(!req.body.origin){
			return res.send({ msg: 'Selecione o motivo da saída!' });
		};

		let products = JSON.parse(req.body.products);
		if(!products.length){
			return res.send({ msg: 'Selecione os produtos que deseja retirar!' });
		};

		for(i in products){
			var product = await Storage.getProductAmount(products[i]);
			if(product[0].amount - products[i].amount < 0){
				return res.send({ msg: 'Restam '+product[0].amount+' '+products[i].category+'(s) '+products[i].name+' '+products[i].color+' '+products[i].size+' em estoque!' });
			};
		};

		for(i in products){
			await Storage.decreaseAmount(products[i]);
		};

		res.send({ done: 'Os produtos foram removidos do estoque com sucesso!' });
	},
	filter: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		if(isNaN(req.body.product_cod) || req.body.product_cod < 0 || req.body.product_cod > 9999){
			req.body.product_cod = "";
		};

		if(req.body.product_cod){
			let product = await Product.findByCod(req.body.product_cod);
			res.send({ location: req.body.product_location, products: product });
		} else {
			const product = {
				category: req.body.product_category,
				color: req.body.product_color
			};

			const factory = {
				id: 1
			};

			let products = await Product.filter(product);
			let storage = await Storage.list(factory);
			
			for(i in products){
				for(y in storage){
					if(products[i].id == storage[y].product_id){
						products[i].amount = storage[y].amount;
					};
				};
			};

			res.send({ location: req.body.product_location, products: products });
		};
	}
};

module.exports = storageController;