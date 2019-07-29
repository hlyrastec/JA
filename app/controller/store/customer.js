const userController = require('../user');
const Jobs = require('../../model/job');

const Customer = require('../../model/store/customer');

const customerController = {
	save: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['vds','cxs','prp','grf','cof','dvp','spt','aaf'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		const customer = {
			name: req.body.customer_name,
			cpf: req.body.customer_cpf,
			phone: req.body.customer_phone
		};

		let verifyUnique = await Customer.findByCpf(customer.cpf);
		
		if(verifyUnique.length){
			return res.send({ msg: 'Este CPF já está cadastrado.'});
		};

		let row = await Customer.save(customer);
        customer.id = row.insertId;

		res.send({ done: 'Cliente cadastrado com sucesso!', customer: customer });
	},
	findByCpf: async (req, res) => {
		if(!await userController.verifyAccess(req, res, ['vds','cxs','prp','grf','cof','dvp','spt','aaf'])){
			return res.send({ unauthorized: "Usuário não autorizado."});
		};

		let customer = await Customer.findByCpf(req.body.customer_cpf);

		if(customer.length < 1){
			return res.send({ msg: 'Nenhum cliente cadastrado com este cpf!' });
		};

		res.send({ customer: customer[0] });
	}
};

module.exports = customerController;