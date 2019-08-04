const userController = require('../user');
const Product = require('../../model/factory/product');
const StoreProduct = require('../../model/store/product');
const Jobs = require('../../model/job');

const productController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd'])){
			return res.redirect('/login');
		};
		res.render('factory/product/index');
	},
	save: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		const product = {
			id: parseInt(req.body.product_id),
			cod: parseInt(req.body.product_cod),
			name: req.body.product_name,
			type: req.body.product_type,
			color: req.body.product_color,
			size: req.body.product_size,
			value: parseFloat(req.body.product_value)
		};

		if(!product.cod || product.cod < 1 || product.cod > 9999){return res.send({ msg: 'Código de produto inválido.' })};
		if(!product.name || product.name.length > 15){return res.send({ msg: 'Preencha o nome do produto.' })};
		if(!product.type || product.type.length > 20){return res.send({ msg: 'Preencha o tipo do produto.' })};
		if(!product.color || product.type.length > 10){return res.send({ msg: 'Preencha a cor do produto.' })};
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

		if(req.body.product_cod){
			let product = await Product.findByCod(req.body.product_cod);
			res.send({ products: product });
		} else {
			const product = {
				type: req.body.product_type,
				color: req.body.product_color
			};
			let products = await Product.filter(product);
			res.send({ products: products });
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
	addType: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const type = {
			name: req.body.type_name,
			shortcut: req.body.type_shortcut			
		};

		await Product.addType(type);

		res.send({ done: 'Categoria cadastrada com sucesso!' });
	},
	addColor: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','grl','grf','crd'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const color = {
			name: req.body.color_name,
			shortcut: req.body.color_shortcut			
		};

		await Product.addColor(color);

		res.send({ done: 'Cor cadastrada com sucesso!' });
	},
	getTypes: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const types = await Product.getTypes();

		res.send({ types: types });
	},
	getColors: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		
		const colors = await Product.getColors();

		res.send({ colors: colors });
	}
};

module.exports = productController;