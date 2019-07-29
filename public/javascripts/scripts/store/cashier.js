const Cashier = {
	discount: 0,
	total: 0,
	final: 0
};

$(function(){
	$("#change-customer-sale-form").on("change", function(event){
		let customerSaleSel = document.getElementById('change-customer-sale-form'); 
		if(customerSaleSel.value =='search-customer'){
			document.getElementById('search-customer-box').style.display = 'block';
			document.getElementById('create-customer-box').style.display = 'none';
		} else if(customerSaleSel.value =='create-customer'){
			document.getElementById('search-customer-box').style.display = 'none';
			document.getElementById('create-customer-box').style.display = 'block';
		} else {
			document.getElementById('search-customer-box').style.display = 'none';
			document.getElementById('create-customer-box').style.display = 'none';
		};
	});

	  /////////////////////
	 /// KART FUNCTIONS //
	/////////////////////
	$('#cashier-product-add-btn').on('click', function(event){
		event.preventDefault();
		document.getElementById("cashier-product-add-btn").disabled = true;

		let product_cod = document.getElementById('cashier-product-select').value;
		let product_amount = document.getElementById('cashier-product-amount-select').value;
		
		if(product_cod!='' && product_cod!='0'){
			// continue;
		} else {
			alert('Favor selecionar um produto');
			return document.getElementById("cashier-product-add-btn").disabled = false;
		};

		for(i in cashier_product_array){
			if(product_cod==cashier_product_array[i].cod){
				product_cod = '';
				alert('Produto já inserido');
				return document.getElementById("cashier-product-add-btn").disabled = false;
			};
		};
		
		if(product_amount!='' && product_amount>0){
			// continue
		} else {
			alert('Favor inserir a quantidade');
			return document.getElementById("cashier-product-add-btn").disabled = false;
		};

		// verify product in storage
		$.ajax({
			url: '/store/product/get',
			method: 'post',
			data: { 
				product_cod: product_cod
			},
			success: (response) => {
				if(response.product[0].amount < product_amount){
					alert('Restam apenas '+ response.product[0].amount + ' deste produto em estoque.');
					return document.getElementById("cashier-product-add-btn").disabled = false;
				};

				let product = {
					id: response.product[0].id,
					cod: response.product[0].cod,
					type: response.product[0].type,
					name: response.product[0].name,
					color: response.product[0].color,
					size: response.product[0].size,
					amount: product_amount,
					value: response.product[0].value,
					total_value: response.product[0].value * product_amount
				};

				cashier_product_array.push(product);

				let product_tbody = document.getElementById('main-product-tbl-tbody');
				
				let html = "<tr>";
				html += "<td id='cashier-product-id' hidden>"+ product.id +"</td>";
				html += "<td id='src_product_cod' hidden>"+product.cod+"</td>";
				html += "<td><a id='store-product-show-btn'>"+product.cod+"</a></td>";
				html += "<td id='cashier-product-info'>"+ product.type +" | "+ product.name +" | "+ product.color +" | "+ product.size +"</td>";
				html += "<td id='cashier-product-amount-remove-btn'><a>-</a></td>";
				html += "<td id='cashier-product-amount'>"+ product.amount +"</td>";
				html += "<td id='cashier-product-amount-add-btn'><a>+</a></td>";
				html += "<td id='cashier-product-value'>"+ product.value +"</td>";
				html += "<td id='cashier-product-total_value'>"+ product.total_value +"</td>";
				html += "<td><a id='cashier-product-remove-btn'>Remove</a></td>";
				html += "</tr>";

				product_tbody.innerHTML += html;
				updateCashier();
				document.getElementById("cashier-product-add-btn").disabled = false;
			}
		});
	});

	$('table').on('click', '#cashier-product-amount-remove-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#cashier-product-id').text();

		if(parseInt(rowEl.find('#cashier-product-amount').text())>1){
			for(i in cashier_product_array){
				if(product_id == cashier_product_array[i].id){
					cashier_product_array[i].total_value = cashier_product_array[i].value * (parseInt(rowEl.find('#cashier-product-amount').text()) - 1);
					rowEl.find('#cashier-product-total_value').text(cashier_product_array[i].total_value);
				};
			};
			rowEl.find('#cashier-product-amount').text(parseInt(rowEl.find('#cashier-product-amount').text()) - 1);
			cashier_product_array.forEach(function(product){
				if(product.id==product_id){
					product.amount = parseInt(rowEl.find('#cashier-product-amount').text());
				};
			});
			updateCashier();
		};
	});

	$('table').on('click', '#cashier-product-amount-add-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#cashier-product-id').text();

		$.ajax({
			url: '/store/product/get',
			method: 'post',
			data: { product_id: product_id },
			success: function(response){
				if(response.product[0].amount>=parseInt(rowEl.find('#cashier-product-amount').text())+1){
					for(i in cashier_product_array){
						if(product_id == cashier_product_array[i].id){
							cashier_product_array[i].total_value = cashier_product_array[i].value * (parseInt(rowEl.find('#cashier-product-amount').text()) + 1);
							rowEl.find('#cashier-product-total_value').text(cashier_product_array[i].total_value);
						};
					};
					rowEl.find('#cashier-product-amount').text(parseInt(rowEl.find('#cashier-product-amount').text()) + 1);
					cashier_product_array.forEach(function(product){
						if(product.id==product_id){
							product.amount = parseInt(rowEl.find('#cashier-product-amount').text());
						};
					});
					updateCashier();
				} else {
					return alert('Não há mais deste produto em estoque.');
				};
			}
		});
	});

	$('table').on('click', '#cashier-product-remove-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#cashier-product-id').text();
		rowEl[0].parentNode.removeChild(rowEl[0]);

		let newArray = [];
		for(let i in cashier_product_array){
			if(product_id!=cashier_product_array[i].id){
				newArray.push(cashier_product_array[i]);
			};
		};
		cashier_product_array = newArray;
		updateCashier();
	});

	$('#cashier-discount-update-btn').on('click', function(event){
		Cashier.discount = parseFloat(document.getElementById('cashier-discount-update-value').value);
		if(isNaN(Cashier.discount) || Cashier.discount < 0){
			return alert('Valor de desconto inválido!');	
		};
		updateCashier();
	});
});

function updateCashier(){
	let total_value = 0;
	for(i in cashier_product_array){
		total_value += parseFloat(cashier_product_array[i].total_value);
	};
	Cashier.total = total_value;
	if(Cashier.discount > Cashier.total){
		Cashier.discount = Cashier.total;
	};
	Cashier.final = total_value - Cashier.discount;

	document.getElementById('cashier-discount').innerHTML = Cashier.discount;
	document.getElementById('cashier-total').innerHTML = Cashier.total;
	document.getElementById('cashier-final').innerHTML = Cashier.final;
};

function printCashierSale(sale){
	var html = "<div style='display:inline-block;text-align:center;page-break-inside:avoid;page-break-after:auto;border-top:1px solid black;border-bottom:1px solid black;width:650px;margin-right:15px;padding:10px;'>";
	// html += "<img src='JAicon.png'><br>"
	// html += "<p style='font-size:8px'>Nome da empresa e CNPJ: 123.200101023123.3</p><br>"


	html += "<table border=1 cellspacing=0 cellpadding=2 style='text-align:center;width:100%;font-size:12px;'>";
	html += "<tr>";
	html += "<td>Cód:"+ sale.id +"</td>";
	html += "<td>Cliente: "+ sale.customer_name+"</td>";
	html += "<td>CPF: "+ sale.customer_cpf+"</td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td>Data: "+ sale.full_date+"</td>";
	html += "<td>Pag: "+ sale.payment_method+" | "+ sale.payment_installment+"x</td>";
	html += "<td>Vendedor: "+ sale.user+"</td>";
	html += "</tr>";
	html += "</table>";

	html += "<br>";
	
	html += "<table border=1 cellspacing=0 cellpadding=2 style='text-align:center;width:100%;font-size:12px;'>";
	html += "<tr>";
	html += "<td>Produto</td>";
	html += "<td>Qtd</td>";
	html += "<td>Val.un.</td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "</tr>";
	sale.products.forEach(function(product){
		html += "<tr>";
		html += "<td>"+ product.type +" "+ product.name+" "+ product.color+" "+ product.size+"</td>";
		html += "<td>"+ product.amount +"</td>";
		html += "<td>"+ product.value +"</td>";
		html += "<td></td>";
		html += "<td>"+(product.value*product.amount)+"</td>";
		html += "</tr>";
	});
	html += "<tr>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td>-----</td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>Valor total:</td>";
	html += "<td>"+ sale.total_value+"</td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td></td>";
	html += "<td>Descontos</td>";
	html += "<td>kit mod.</td>";
	html += "<td>outros</td>";
	html += "<td></td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td></td>";
	html += "<td>"+ sale.discount+"</td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>- "+ parseInt(sale.discount) +"</td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "</tr>";
	
	html += "<tr>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>valor:</td>";
	html += "<td style='font-weight:bold;font-weight:15px;'>"+ sale.final_value+"</td>";
	html += "</tr>";

	html += "</table>";
	html += "</div>";
	
	html += "<br><br>";

	// client

	html += "<div style='display:inline-block;text-align:center;page-break-inside:avoid;page-break-after:auto;border-top:1px solid black;border-bottom:1px solid black;width:650px;margin-right:15px;padding:10px;'>";
	html += "<img src='/images/jaicon.png'><br>";
	html += "<p style='font-size:8px'>Nome da empresa e CNPJ: 123.200101023123.3</p><br>";

	html += "<table border=1 cellspacing=0 cellpadding=2 style='text-align:center;width:100%;font-size:12px;'>";
	html += "<tr>";
	html += "<td>Data: "+ sale.full_date +"</td>";
	html += "<td>Cliente: "+ sale.customer_name +"</td>";
	html += "<td>CPF: "+ sale.customer_cpf +"</td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td>Pag: "+ sale.payment_method +"</td>";
	html += "<td>Parc: "+ sale.payment_installment +"</td>";
	html += "<td>Vendedor: "+ sale.user +"</td>";
	html += "</tr>";
	html += "</table>";

	html += "<br>";
	
	html += "<table border=1 cellspacing=0 cellpadding=2 style='text-align:center;width:100%;font-size:12px;'>";
	html += "<tr>";
	html += "<td>Produto</td>";
	html += "<td>Qtd</td>";
	html += "<td>Val.un.</td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "</tr>";
	sale.products.forEach(function(product){
		html += "<tr>";
		html += "<td>"+ product.type+" "+ product.name+" "+ product.color+" "+ product.size+"</td>";
		html += "<td>"+ product.amount+"</td>";
		html += "<td>"+ product.value+"</td>";
		html += "<td></td>";
		html += "<td>"+(product.value*product.amount)+"</td>";
		html += "</tr>";
	});
	html += "<tr>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td>-----</td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>Valor total:</td>";
	html += "<td>"+ sale.total_value +"</td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td></td>";
	html += "<td>Descontos</td>";
	html += "<td>kit mod.</td>";
	html += "<td>outros</td>";
	html += "<td></td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td></td>";
	html += "<td>"+ sale.discount+"</td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>- "+ parseInt(sale.discount) +"</td>";
	html += "</tr>";

	html += "<tr>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "<td><br></td>";
	html += "</tr>";
	
	html += "<tr>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>valor:</td>";
	html += "<td style='font-weight:bold;font-weight:15px;'>"+ sale.final_value+"</td>";
	html += "</tr>";

	html += "</table>";
	html += "</div>";

	var content = html;
	var print = window.open('J.A Rio Militar');
	
	print.document.write(content);
	setTimeout(() => {
		print.window.print();
		print.window.close();
	}, 250);
};