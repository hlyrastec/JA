const db = require('../../config/connection');

const Product = function(){
	this.id;
	this.cod;
	this.name;
	this.category;
	this.color;
	this.size;
	this.amount = 0;
	this.value = 0;
};

Product.save = async (product) => {
	let query = "INSERT INTO lfsdb.product (cod, name, category, color, size, value) VALUES ('"
		+product.cod+"', '"
		+product.name+"','"
		+product.category+"','"
		+product.color+"','"
		+product.size+"','"
		+product.value+"');";
	return db(query);
};

Product.update = async (product) => {
	let query = "UPDATE lfsdb.product SET cod='"+product.cod
		+"', name='"+product.name
		+"', category='"+product.category
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
	let query = "SELECT * FROM lfsdb.product ORDER BY cod ASC;";
	return db(query);
};

Product.getImages = async (id) => {
	let query = "SELECT * FROM lfsdb.product_image WHERE product_id='"+id+"';";
	return db(query);
};

Product.findById = async (id) => {
	let query = "SELECT * FROM lfsdb.product WHERE id='"+id+"';";
	return db(query);
};

Product.findByCod = async (cod) => {
	let query = "SELECT * FROM lfsdb.product WHERE cod='"+cod+"';";
	return db(query);
};

Product.filter = async (product) => {
	console.log(product);
	if(product.category && product.color){
		var query = "SELECT * FROM lfsdb.product WHERE category='"+product.category+"' AND color='"+product.color+"' ORDER BY cod ASC;";
	} else if(product.category && !product.color){
		var query = "SELECT * FROM lfsdb.product WHERE category='"+product.category+"' ORDER BY cod ASC;";
	} else if(!product.category && product.color){
		var query = "SELECT * FROM lfsdb.product WHERE color='"+product.color+"' ORDER BY cod ASC;";
	} else if(!product.category && !product.color){
		var query = "SELECT * FROM lfsdb.product ORDER BY cod ASC;";
	};
	return db(query);
};

Product.remove = async (cod) => {
	let query = "DELETE FROM lfsdb.product WHERE cod='"+cod+"';";
	return db(query);
};

Product.removeImage = async (id) => {
	let query = "DELETE FROM lfsdb.product_image WHERE id='"+id+"';";
	return db(query);
};

Product.categorySave = async (category) => {
	let query = "INSERT INTO lfsdb.product_category (name, shortcut) VALUES ('"+category.name+"','"+category.shortcut+"');";
	return db(query);
};

Product.categoryList = async () => {
	let query = "SELECT * FROM lfsdb.product_category ORDER BY name ASC;";
	return db(query);
};

Product.colorSave = async (color) => {
	let query = "INSERT INTO lfsdb.product_color (name, shortcut) VALUES ('"+color.name+"','"+color.shortcut+"');";
	return db(query);
};

Product.colorList = async () => {
	let query = "SELECT * FROM lfsdb.product_color ORDER BY name ASC;";
	return db(query);
};

module.exports = Product;