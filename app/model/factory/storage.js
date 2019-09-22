const db = require('../../../config/connection');

const Storage = function(){
	this.id;
	this.factory_id;
	this.product_id;
	this.amount;
};

Storage.save = async (insertion) => {
	let query = "INSERT INTO ERP.factory_storage (factory_id, product_id, amount) VALUES ('"
		+insertion.factory_id+"', '"
		+insertion.product_id+"', '"
		+insertion.amount+"');";
	return db(query);
};

Storage.list = async (factory) => {
	let query = "SELECT * FROM ERP.factory_storage WHERE factory_id = "+factory.id+";";
	return db(query);
};

Storage.increaseAmount = async (product) => {
	let query = "UPDATE ERP.factory_storage SET amount = amount +"+ product.amount +" WHERE product_id = "+product.id+";"
	return db(query);	
};

Storage.decreaseAmount = async (product) => {
	let query = "UPDATE ERP.factory_storage SET amount = amount -"+ product.amount +" WHERE product_id = "+product.id+";"
	return db(query);	
};

Storage.getProductAmount = async (product) => {
	let query = "SELECT amount FROM ERP.factory_storage WHERE product_id = "+ product.id +";";
	return db(query);
};

module.exports = Storage;