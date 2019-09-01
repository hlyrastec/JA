const userController = require('./user');
const Product = require('../model/product');
const StoreProduct = require('../model/store/product');
const Jobs = require('../model/job');

const productController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd'])){
			return res.redirect('/login');
		};
		res.render('admin/product/index');
	},
	config: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd'])){
			return res.redirect('/login');
		};
		res.render('admin/product/config');
	},
	save: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		const product = {
			id: parseInt(req.body.product_id),
			cod: parseInt(req.body.product_cod),
			name: req.body.product_name,
			category: req.body.product_category,
			color: req.body.product_color,
			size: req.body.product_size,
			value: parseFloat(req.body.product_value)
		};

		if(!product.cod || product.cod < 1 || product.cod > 9999){return res.send({ msg: 'Código de produto inválido.' })};
		if(!product.name || product.name.length > 15){return res.send({ msg: 'Preencha o nome do produto.' })};
		if(!product.category || product.category.length > 20){return res.send({ msg: 'Preencha o tipo do produto.' })};
		if(!product.color || product.category.length > 10){return res.send({ msg: 'Preencha a cor do produto.' })};
		if(!product.size || product.size.length > 3){return res.send({ msg: 'Preencha o tamanho do produto.' })};

		if(!product.id){
			var row = await Product.findByCod(product.cod);
			if(row.length){return res.send({ msg: 'Este código de produto já está cadastrado.' })};
			
			await Product.save(product);
			var row = await StoreProduct.save(product);
		} else {
			var row = await Product.findByCod(product.cod);
			if(row.length){
				if(row[0].id != product.id){
					return res.send({ msg: 'Este código de produto já está cadastrado.' });
				};
			};

			await Product.update(product);
			var row = await StoreProduct.update(product);
		};

		let newProduct = await Product.findById(row.insertId);
		res.send({ done: 'Produto cadastrado com sucesso!', product: newProduct });
	},
	addImage: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		const image = {
			product_id: req.body.product_id,
			url: req.body.image_url
		};

		await Product.addImage(image);
	
		res.send({ done: 'Imagem adicionada com sucesso!' });
	},
	removeImage: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		await Product.removeImage(req.body.image_id);
	
		res.send({ done: 'Imagem excluída!' });
	},
	list: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		let products = Product.list();
		res.send({ products: products });
	},
	get: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		let product = await Product.findByCod(req.body.product_cod);
		product[0].images = await Product.getImages(product[0].id);

		res.send({ product: product });
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
			res.send({ products: product });
		} else {
			const product = {
				category: req.body.product_category,
				color: req.body.product_color
			};
			let products = await Product.filter(product);
			res.send({ location: req.body.product_location, products: products });
		};
	},
	remove: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		await Product.remove(req.body.product_cod);
		await StoreProduct.remove(req.body.product_cod);
		res.send({ done: 'Produto excluído com sucesso!' });
	},
	categorySave: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const category = {
			name: req.body.product_category_name,
			shortcut: req.body.product_category_shortcut			
		};

		await Product.categorySave(category);

		res.send({ done: 'Categoria cadastrada com sucesso!' });
	},
	categoryList: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const categories = await Product.categoryList();

		res.send({ categories: categories });
	},
	colorSave: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const color = {
			name: req.body.color_name,
			shortcut: req.body.color_shortcut			
		};

		await Product.colorSave(color);

		res.send({ done: 'Cor cadastrada com sucesso!' });
	},
	colorList: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const colors = await Product.colorList();

		res.send({ colors: colors });
	}
};

module.exports = productController;