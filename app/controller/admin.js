const userController = require('./user');
const User = require('../model/user');
const Jobs = require('../model/job');

const adminController = {
	index: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['prp','dvp','spt'])){
			return res.redirect('/login');
		};

		res.render('admin/index');
	},
	updateUserAccess: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['prp','dvp'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};
		let user = {
			id: req.body.user_id,
			newAccess: req.body.user_newAccess,
			newJob: undefined
		};

		// verify if the user is a developer or president
		var row = await User.findById(user.id);
		if(row[0].access=='prp' || row[0].access=='dvp'){
			return res.send({ msg: 'Você não tem permissão para alterar os privilégios deste usuário.' })
		};

		// change the job of user
		for(i in Jobs){
			if(Jobs[i].code==user.newAccess){
				user.newJob = Jobs[i].name;
			};
		};

		// if update job gets an error
		if(!await User.updateAccess(user)){
			return res.send({ err: 'Ocorreu um erro, favor contatar o supporte'});
		};

		res.send({ done: "Privilégio atualizado com sucesso." });
	},
	// open the support page
	support: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['prp','dvp','spt'])){
			return res.redirect('/login');
		};

		let users = await User.list();

		res.render('admin/support/index', {users: users});
	},
	// open the support chat page of a specific user
	supportChat: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['prp','dvp','spt'])){
			return res.redirect('/login');
		};

		res.render('admin/support/chat', { user: req.user, room: req.body.room, serviceDesk: req.body.serviceDesk });
	}
};

module.exports = adminController;