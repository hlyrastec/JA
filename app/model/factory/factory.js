const db = require('../../../config/connection');

const Factory = function(){
	this.id;
	this.city;
	this.state;
};

Factory.save = async (factory) => {
	let query = "INSERT INTO erp.factory (city, state) VALUES ('"
		+factory.city+"', '"
		+factory.state+"');";
	return db(query);
};

module.exports = Factory;