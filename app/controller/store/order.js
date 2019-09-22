const Lib = require('../../../config/lib');

const userController = require('../user');
const Jobs = require('../../model/job');

const Product = require('../../model/product');
const Customer = require('../../model/customer');
const Order = require('../../model/store/order');

const OrderController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl'])){
			return res.redirect('/login');
		};
		res.render('store/order/index');
	},
	save: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		if(req.body.order_customer_cpf == '' || req.body.order_customer_cpf == '0'){
			return res.send({ msg: 'É necessário selecionar um cliente' });
		};

		if(req.body.order_payment_method == '' || req.body.order_payment_method == '0'){
			return res.send({ msg: 'É necessário selecionar um método de pagamento' });
		};

		if(JSON.parse(req.body.order_products).length < 1){
			return res.send({ msg: 'Não é possível realizar vendas sem produtos.' });
		};

		let customer = await Customer.findByCpf(req.body.order_customer_cpf);

		const order = {
			store: '1',
			date: Lib.genDate(),
			full_date: Lib.genFullDate(),
			customer_cpf: customer[0].cpf,
			customer_name: customer[0].name,
			payment_method: req.body.order_payment_method,
			payment_installment: req.body.order_payment_installment,
			discount: req.body.order_discount,
			total_value: req.body.order_total,
			final_value: req.body.order_final,
			user: req.user.name,
			status: 'concluída',
			products: JSON.parse(req.body.order_products)
		};

		let row = await Order.save(order);
		order.id = row.insertId;

		for(i in order.products){
			let product = {
				order_id: order.id,
				id: order.products[i].id,
				category: order.products[i].category,
				name: order.products[i].name,
				color: order.products[i].color,
				size: order.products[i].size,
				amount: order.products[i].amount,
				value: order.products[i].value
			};
			await Order.saveProducts(product);
		};

		res.send({ done: 'Venda cadastrada!', order: order });
	},
	get: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		let order = await Order.findById(req.body.order_id);
		order.products = await Order.findProductsById(req.body.order_id);

		for(i in order.products){
			var product = await Product.findById(order.products[i].product_id);
			order.products[i].category = product[0].category;			
			order.products[i].name = product[0].name;			
			order.products[i].color = product[0].color;			
			order.products[i].size = product[0].size;
		};

		res.send({ order: order, products: order.products });
	},
	filter: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['dvp','prp','spt','grf','grl','crd','cxl','vdl','vde','etf','etl','aaf','aal'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		const order = {
			customer_cpf: req.body.customer_cpf,
			date: req.body.order_date
		};

		let orders = await Order.filter(order);

		if(orders.length < 1){
			return res.send({ msg: 'Não foram encontrados resultados.' });
		};

		res.send({ orders: orders });
	}
};

module.exports = OrderController;