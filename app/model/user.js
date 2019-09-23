const db = require('../../config/connection');

const User = function(){
	this.id;
	this.name;
	this.email;
	this.username;
	this.password;
	this.birth;
	this.access;
};

User.list = () => {
	let query = "SELECT * FROM erp.users;";
	return db(query);
};

User.findById = (id) => {
	let query = "SELECT * FROM erp.users WHERE id='"+id+"';";
	return db(query);
};

User.findByUsername = (user) => {
	let query = "SELECT * FROM erp.users WHERE username='"+user.username+"';";
	return db(query);
};

User.findByEmail = (user) => {
	let query = "SELECT * FROM erp.users WHERE email='"+user.email+"';";
	return db(query);
};

User.updateAccess = (user) => {
	let query = "UPDATE erp.users SET access='"+user.newAccess+"', job='"+user.newJob+"' WHERE id='"+user.id+"';";
	return db(query);
};

User.updatePassword = (user) => {
	let query = "UPDATE erp.users SET password='"+user.password+"' WHERE id='"+user.id+"';";
	return db(query);
};

User.updateInfo = (user) => {
	if(user.email && user.birth){
		var query = "UPDATE erp.users SET email='"+user.email+"', birth='"+user.birth+"' WHERE id='"+user.id+"';";
	} else if(user.email && !user.birth){
		var query = "UPDATE erp.users SET email='"+user.email+"' WHERE id='"+user.id+"';";
	} else if(!user.email && user.birth){
		var query = "UPDATE erp.users SET birth='"+user.birth+"' WHERE id='"+user.id+"';";
	};
	return db(query);
};

User.supportConnect = (id) => {
	let query = "UPDATE erp.users SET support='connected' WHERE id='"+id+"';";
	return db(query);
};

User.supportDisconnect = (id) => {
	let query = "UPDATE erp.users SET support='disconnected' WHERE id='"+id+"';";
	return db(query);
};

User.saveMessage = (data, room) => {
	let query = "INSERT INTO erp.room"+room+" (user, full_date, message) VALUES ('"+data.user+"', '"+data.full_date+"', '"+data.message+"');";
	return db(query);
};

User.loadMessages = (room) => {
	let query = "SELECT * FROM erp.room"+room+";";
	return db(query);
};

User.openServiceDeskCall = (id) => {
	let query = "UPDATE erp.users SET serviceDesk='opened' WHERE id='"+id+"';";
	return db(query);
};

User.closeServiceDeskCall = (room) => {
	let query = "UPDATE erp.users SET serviceDesk='closed' WHERE id='"+room+"';";
	return db(query);
};

module.exports = User;