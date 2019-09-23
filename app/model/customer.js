const db = require('../../config/connection');

const Customer = function(){
	this.id;
	this.name;
	this.cpf;
	this.phone;
};

Customer.save = async (customer) => {
	let query = "INSERT INTO erp.customer (name, cpf, phone) VALUES ('"
		+customer.name+"','"
		+customer.cpf+"','"
		+customer.phone+"');";

	return db(query);
};

Customer.findById = async (id) => {
	let query = "SELECT * FROM erp.customer WHERE id='"+id+"';";
	return db(query);
};

Customer.findByCpf = async (cpf) => {
	let query = "SELECT * FROM erp.customer WHERE cpf='"+cpf+"';";
	return db(query);
};

module.exports = Customer;