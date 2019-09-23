const db = require('../../../config/connection');

const Sale = function(){
	this.id;
	this.customerId;
	this.customerName;
	this.discount;
	this.value;
};

Sale.save = async (Sale) => {
	let query = "INSERT INTO erp.store_sale (store, date, full_date, customer_cpf, customer_name, payment_method, payment_installment, discount, total_value, final_value, status, user) VALUES ('"
		+ Sale.store +"', '"
		+ Sale.date +"', '"
		+ Sale.full_date +"','"
		+ Sale.customer_cpf +"','"
		+ Sale.customer_name +"','"
		+ Sale.payment_method +"','"
		+ Sale.payment_installment +"','"
		+ Sale.discount +"','"
		+ Sale.total_value +"','"
		+ Sale.final_value +"','"
		+ Sale.status +"','"
		+ Sale.user +"');";
	return db(query);
};

Sale.saveProducts = async (product) => {
	let query = "INSERT INTO erp.store_sale_product (sale_id, product_id, amount, value) VALUES ('"
		+ product.sale_id +"', '"
		+ product.id +"', '"
		+ product.amount +"', '"
		+ product.value +"');";
	return db(query);
};

Sale.findById = async (id) => {
	let query = "SELECT * FROM erp.store_sale WHERE id='"+ id +"';";
	return db(query);
};

Sale.findProductsById = async (id) => {
	let query = "SELECT * FROM erp.store_sale_product WHERE sale_id='"+ id +"';";
	return db(query);
};

Sale.filter = async (sale) => {
	if(sale.customer_cpf && sale.date){
		var query = "SELECT * FROM erp.store_sale WHERE customer_cpf='"+ sale.customer_cpf +"' AND date='"+ sale.date +"' ORDER BY id DESC;";
	} else if(sale.customer_cpf && !sale.date){
		var query = "SELECT * FROM erp.store_sale WHERE customer_cpf='"+ sale.customer_cpf +"' ORDER BY id DESC;";
	} else if(!sale.customer_cpf && sale.date){
		var query = "SELECT * FROM erp.store_sale WHERE date='"+ sale.date +"' ORDER BY id DESC;";
	} else if(!sale.customer_cpf && !sale.date){
		var query = "SELECT * FROM erp.store_sale ORDER BY id DESC;";
	};
	return db(query);
};


module.exports = Sale;