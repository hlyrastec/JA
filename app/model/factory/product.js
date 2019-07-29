const db = require('../../../config/connection');

const Product = function(){
	this.id;
	this.cod;
	this.name;
	this.type;
	this.color;
	this.size;
	this.amount = 0;
	this.value = 0;
};

Product.save = async (product) => {
	let query = "INSERT INTO lfsdb.factory_product (cod, name, type, color, size, value) VALUES ('"
		+product.cod+"', '"
		+product.name+"','"
		+product.type+"','"
		+product.color+"','"
		+product.size+"','"
		+product.value+"');";
	return db(query);
};

Product.update = async (product) => {
	let query = "UPDATE lfsdb.factory_product SET cod='"+product.cod
		+"', name='"+product.name
		+"', type='"+product.type
		+"', color='"+product.color
		+"', size='"+product.size
		+"', value='"+product.value+"' WHERE id='"+product.id+"';";
	return db(query);
};

Product.addImage = async (image) => {
	let query = "INSERT INTO lfsdb.product_image (product_id, url) VALUES ('"
		+image.product_id+"', '"
		+image.url+"');";
	return db(query);
};

Product.list = async () => {
	let query = "SELECT * FROM lfsdb.factory_product ORDER BY cod ASC;";
	return db(query);
};

Product.getImages = async (id) => {
	let query = "SELECT * FROM lfsdb.product_image WHERE product_id='"+id+"';";
	return db(query);
};

Product.findById = async (id) => {
	let query = "SELECT * FROM lfsdb.factory_product WHERE id='"+id+"';";
	return db(query);
};

Product.findByCod = async (cod) => {
	let query = "SELECT * FROM lfsdb.factory_product WHERE cod='"+cod+"';";
	return db(query);
};

Product.filter = async (product) => {
	if(product.type && product.color){
		var query = "SELECT * FROM lfsdb.factory_product WHERE type='"+product.type+"' AND color='"+product.color+"' ORDER BY cod ASC;";
	} else if(product.type && !product.color){
		var query = "SELECT * FROM lfsdb.factory_product WHERE type='"+product.type+"' ORDER BY cod ASC;";
	} else if(!product.type && product.color){
		var query = "SELECT * FROM lfsdb.factory_product WHERE color='"+product.color+"' ORDER BY cod ASC;";
	} else if(!product.type && !product.color){
		var query = "SELECT * FROM lfsdb.factory_product ORDER BY cod ASC;";
	};
	return db(query);
};

Product.remove = async (cod) => {
	let query = "DELETE FROM lfsdb.factory_product WHERE cod='"+cod+"';";
	return db(query);
};

Product.removeImage = async (id) => {
	let query = "DELETE FROM lfsdb.product_image WHERE id='"+id+"';";
	return db(query);
};

module.exports = Product;