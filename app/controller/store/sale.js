const Lib = require('../../../config/lib');

const userController = require('../user');
const Jobs = require('../../model/job');

const Product = require('../../model/store/product');
const Customer = require('../../model/store/customer');
const Sale = require('../../model/store/sale');

const saleController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['vds','cxs','prp','grf','cof','dvp','spt','aaf'])){
			return res.redirect('/login');
		};
		res.render('store/sale/index');
	},
	save: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['vds','cxs','prp','grf','cof','dvp','spt','aaf'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		if(req.body.sale_customer_cpf == '' || req.body.sale_customer_cpf == '0'){
			return res.send({ msg: 'É necessário selecionar um cliente' });
		};

		if(req.body.sale_payment_method == '' || req.body.sale_payment_method == '0'){
			return res.send({ msg: 'É necessário selecionar um método de pagamento' });
		};

		if(JSON.parse(req.body.sale_products).length < 1){
			return res.send({ msg: 'Não é possível realizar vendas sem produtos.' });
		};

		let customer = await Customer.findByCpf(req.body.sale_customer_cpf);

		const sale = {
			date: Lib.genDate(),
			full_date: Lib.genFullDate(),
			customer_cpf: customer[0].cpf,
			customer_name: customer[0].name,
			payment_method: req.body.sale_payment_method,
			payment_installment: req.body.sale_payment_installment,
			discount: req.body.sale_discount,
			total_value: req.body.sale_total,
			final_value: req.body.sale_final,
			user: req.user.name,
			status: 'concluída',
			products: JSON.parse(req.body.sale_products)
		};

		let row = await Sale.save(sale);
		sale.id = row.insertId;

		for(i in sale.products){
			let product = {
				sale_id: sale.id,
				id: sale.products[i].id,
				type: sale.products[i].type,
				name: sale.products[i].name,
				color: sale.products[i].color,
				size: sale.products[i].size,
				amount: sale.products[i].amount,
				value: sale.products[i].value
			};
			await Sale.saveProducts(product);
		};

		res.send({ done: 'Venda cadastrada!', sale: sale });
	},
	get: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['prp','grf','cof','dvp','spt'])){
			return response.send({ unauthorized: "Usuário não autorizado."});
		};

		let product = await Product.findByCod(req.body.product_cod);
		res.send({ product: product });		
	},
	filter: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['vds','cxs','prp','grf','cof','dvp','spt','aaf'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		const sale = {
			customer_cpf: req.body.customer_cpf,
			date: req.body.sale_date
		};

		let sales = await Sale.filter(sale);

		if(sales.length < 1){
			return res.send({ msg: 'Não foram encontrados resultados.' });
		};

		res.send({ sales: sales });
	},
	print: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['vds','cxs','prp','grf','cof','dvp','spt','aaf'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		let sale = await Sale.findById(req.body.sale_id);
		sale.products = await Sale.findProductsById(req.body.sale_id);

		for(i in sale.products){
			var product = await Product.findById(sale.products[i].product_id);
			sale.products[i].type = product[0].type;			
			sale.products[i].name = product[0].name;			
			sale.products[i].color = product[0].color;			
			sale.products[i].size = product[0].size;
		};

		res.send({ sale: sale, products: sale.products });
	}
};

module.exports = saleController;