$(function(){
	$("#create-customer-btn").on("click", function(event){
		document.getElementById("create-customer-btn").disabled = true;
		
		let name = document.getElementById('customer-name').value;
		let cpf = document.getElementById('customer-cpf').value;
		let phone = document.getElementById('customer-phone').value;

		if(!name){
			alert('É necessário inserir o nome.');
			return document.getElementById("create-customer-btn").disabled = false;
		};

		if(isNaN(cpf) || cpf < 0){
			alert('CPF inválido!');	
			return document.getElementById("create-customer-btn").disabled = false;
		};

		if(isNaN(phone) || phone < 0){
			alert('Telefone inválido!');	
			return document.getElementById("create-customer-btn").disabled = false;
		};

		$.ajax({
			url: '/store/customer/save',
			method: 'post',
			data: {
				customer_name: name,
				customer_cpf: cpf,
				customer_phone: phone
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				if(response.msg){
					alert(response.msg);
					document.getElementById("create-customer-btn").disabled = false;
					return;
				};

				alert(response.done);

				document.getElementById('store-sale-customer').innerHTML = "<option value='"+cpf+"'>"+response.customer.name+"</option>";
			}
		})
	});

	$("#search-customer-btn").on("click", function(event){
		let cpf = document.getElementById('src-customer-cpf').value;

		$.ajax({
			url: '/store/customer/findByCpf',
			method: 'post',
			data: {
				customer_cpf: cpf,
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				if(response.msg){
					alert(response.msg);
					document.getElementById("create-customer-btn").disabled = false;
					return;
				};

				document.getElementById('store-sale-customer').innerHTML = "<option value='"+cpf+"'>"+response.customer.name+"</option>";
			}
		})
	})
});