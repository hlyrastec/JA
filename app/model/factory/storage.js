const db = require('../../../config/connection');

const Storage = function(){
	this.id;
	this.factory_id;
	this.product_id;
	this.amount;
};

Storage.save = async (insertion) => {
	let query = "INSERT INTO erp.factory_storage (factory_id, product_id, amount) VALUES ('"
		+insertion.factory_id+"', '"
		+insertion.product_id+"', '"
		+insertion.amount+"');";
	return db(query);
};

Storage.list = async (factory) => {
	let query = "SELECT * FROM erp.factory_storage WHERE factory_id = "+factory.id+";";
	return db(query);
};

Storage.increaseAmount = async (product) => {
	let query = "UPDATE erp.factory_storage SET amount = amount +"+ product.amount +" WHERE product_id = "+product.id+";"
	return db(query);	
};

Storage.decreaseAmount = async (product) => {
	let query = "UPDATE erp.factory_storage SET amount = amount -"+ product.amount +" WHERE product_id = "+product.id+";"
	return db(query);	
};

Storage.getProductAmount = async (product) => {
	let query = "SELECT amount FROM erp.factory_storage WHERE product_id = "+ product.id +";";
	return db(query);
};

module.exports = Storage;