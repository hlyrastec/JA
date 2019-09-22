$(function(){
	$("#create-customer-btn").on("click", function(event){
		document.getElementById("create-customer-btn").disabled = true;
		
		let customer_name = document.getElementById('customer-name').value.replace(/^\s+|\s+$/g, '');
		let customer_cpf = document.getElementById('customer-cpf').value.replace(/^\s+|\s+$/g, '');
		let customer_phone = document.getElementById('customer-phone').value.replace(/^\s+|\s+$/g, '');

		if(!customer_name){
			alert('É necessário inserir o nome.');
			return document.getElementById("create-customer-btn").disabled = false;
		};

		if(!customer_cpf || isNaN(customer_cpf) || customer_cpf < 0){
			alert('CPF inválido!');	
			return document.getElementById("create-customer-btn").disabled = false;
		};

		if(isNaN(customer_phone) || customer_phone < 0){
			alert('Telefone inválido!');	
			return document.getElementById("create-customer-btn").disabled = false;
		};

		$.ajax({
			url: '/customer/save',
			method: 'post',
			data: {
				customer_name: customer_name,
				customer_cpf: customer_cpf,
				customer_phone: customer_phone
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

				document.getElementById('customer-name').value = "";
				document.getElementById('customer-cpf').value = "";
				document.getElementById('customer-phone').value = "";
				document.getElementById("create-customer-btn").disabled = false;

				document.getElementById('store-sale-customer').innerHTML = "<option value='"+customer_cpf+"'>"+customer_name+"</option>";
			}
		})
	});

	$("#search-customer-btn").on("click", function(event){
		let cpf = document.getElementById('src-customer-cpf').value;

		$.ajax({
			url: '/customer/findByCpf',
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
		});
	});
});