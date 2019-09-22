var cashier_product_array = [];

const Cashier = {
	discount: 0,
	total: 0,
	final: 0
};

// Funções do caixa
$(function(){
	// Alteração de box entre criação ou busca de cliente no caixa
	$("#change-customer-order-form").on("change", function(event){
		let customerorderSel = document.getElementById('change-customer-order-form'); 
		if(customerorderSel.value =='search-customer'){
			document.getElementById('search-customer-box').style.display = 'block';
			document.getElementById('create-customer-box').style.display = 'none';
		} else if(customerorderSel.value =='create-customer'){
			document.getElementById('search-customer-box').style.display = 'none';
			document.getElementById('create-customer-box').style.display = 'block';
		} else {
			document.getElementById('search-customer-box').style.display = 'none';
			document.getElementById('create-customer-box').style.display = 'none';
		};
	});

	// Adicionar produto ao carrinho do caixa e todas suas verificações
	$('#cashier-kart-product-select-form').on('submit', function(event){
		event.preventDefault();

		let cod = document.getElementById('kart-product-cod').value;
		let amount = parseInt(document.getElementById('kart-product-amount').value);
		
		if(cod!='' && cod!='0'){
		} else {
			alert('Favor selecionar um produto');
			return;
		};

		for(i in cashier_product_array){
			if(cod == cashier_product_array[i].cod){
				cod = '';
				alert('Produto já inserido');
				return;
			};
		};
		
		if(amount!='' && amount>0){
		} else {
			alert('Favor inserir a quantidade');
			return;
		};

		$.ajax({
			url: '/product/get',
			method: 'post',
			data: { 
				product_cod: cod
			},
			success: (response) => {
				// if(response.product[0].amount < amount){
				// 	alert('Restam apenas '+ response.product[0].amount + ' deste produto em estoque.');
				// 	return;
				// };

				let product = {
					id: response.product[0].id,
					cod: response.product[0].cod,
					category: response.product[0].category,
					name: response.product[0].name,
					color: response.product[0].color,
					size: response.product[0].size,
					amount: amount,
					value: response.product[0].value,
					total_value: response.product[0].value * amount
				};

				cashier_product_array.push(product);

				let product_tbody = document.getElementById('cashier-kart-product-tbl-tbody');
				
				let html = "<tr>";
				html += "<td id='cashier-kart-product-id' hidden>"+ product.id +"</td>";
				html += "<td id='cashier-kart-product-cod' hidden>"+product.cod+"</td>";
				html += "<td><a onclick='showProduct("+product.cod+")'>"+product.cod+"</a></td>";
				html += "<td id='cashier-kart-product-info'>"+ product.category +" | "+ product.name +" | "+ product.color +" | "+ product.size +"</td>";
				html += "<td id='cashier-kart-product-amount-remove-btn'><a>-</a></td>";
				html += "<td id='cashier-kart-product-amount'>"+ product.amount +"</td>";
				html += "<td id='cashier-kart-product-amount-add-btn'><a class='kart-product-amount-btn'>+</a></td>";
				html += "<td id='cashier-kart-product-value'>"+ product.value +"</td>";
				html += "<td id='cashier-kart-product-total_value'>"+ product.total_value +"</td>";
				html += "<td><a id='cashier-kart-product-remove-btn'>rem</a></td>";
				html += "</tr>";

				product_tbody.innerHTML += html;
				updateCashier();
			}
		});
	});


	$('table').on('click', '#cashier-kart-product-amount-remove-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#cashier-kart-product-id').text();

		if(parseInt(rowEl.find('#cashier-kart-product-amount').text())>1){
			for(i in cashier_product_array){
				if(product_id == cashier_product_array[i].id){
					cashier_product_array[i].total_value = cashier_product_array[i].value * (parseInt(rowEl.find('#cashier-kart-product-amount').text()) - 1);
					rowEl.find('#cashier-kart-product-total_value').text(cashier_product_array[i].total_value);
				};
			};
			rowEl.find('#cashier-kart-product-amount').text(parseInt(rowEl.find('#cashier-kart-product-amount').text()) - 1);
			cashier_product_array.forEach(function(product){
				if(product.id==product_id){
					product.amount = parseInt(rowEl.find('#cashier-kart-product-amount').text());
				};
			});
			updateCashier();
		};
	});

	$('table').on('click', '#cashier-kart-product-amount-add-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#cashier-kart-product-id').text();
		let product_cod = rowEl.find('#cashier-kart-product-cod').text();

		$.ajax({
			url: '/product/get',
			method: 'post',
			data: { product_cod: product_cod },
			success: function(response){
				// if(response.product[0].amount>=parseInt(rowEl.find('#cashier-kart-product-amount').text())+1){
					for(i in cashier_product_array){
						if(product_cod == cashier_product_array[i].cod){
							cashier_product_array[i].total_value = cashier_product_array[i].value * (parseInt(rowEl.find('#cashier-kart-product-amount').text()) + 1);
							rowEl.find('#cashier-kart-product-total_value').text(cashier_product_array[i].total_value);
						};
					};
					rowEl.find('#cashier-kart-product-amount').text(parseInt(rowEl.find('#cashier-kart-product-amount').text()) + 1);
					cashier_product_array.forEach(function(product){
						if(product.id==product_id){
							product.amount = parseInt(rowEl.find('#cashier-kart-product-amount').text());
						};
					});
					updateCashier();
				// } else {
					// return alert('Não há mais deste produto em estoque.');
				// };
			}
		});
	});

	$('table').on('click', '#cashier-kart-product-remove-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#cashier-kart-product-id').text();
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

function clearCashier(){
	Cashier.discount = 0;
	Cashier.total = 0;
	Cashier.final = 0;
	cashier_product_array = [];

	document.getElementById('store-order-customer').innerHTML = "<option value=''>Cliente</option>";
	document.getElementById('store-order-payment-method').value = "";
	document.getElementById('store-order-payment-installment').value = "1";

	document.getElementById('cashier-kart-product-tbl-tbody').innerHTML = "";

	document.getElementById('cashier-discount-update-value').value = "";

	updateCashier();
};

function printCashierOrder(order){
	var html = "<div style='display:inline-block;text-align:center;page-break-inside:avoid;page-break-after:auto;border-top:1px solid black;border-bottom:1px solid black;width:650px;margin-right:15px;padding:10px;'>";

	html += "<img src='/images/jaicon.png'><br>";
	html += "<p style='font-size:8px'>J.A Rio Militar | 14.114.604/0001-73</p><br>";

	html += "<table border=1 cellspacing=0 cellpadding=2 style='text-align:center;width:100%;font-size:12px;'>";
	html += "<tr>";
	html += "<td>Cód:"+ order.id +"</td>";
	html += "<td>Cliente: "+ order.customer_name+"</td>";
	html += "<td>CPF: "+ order.customer_cpf+"</td>";
	html += "</tr>";
	html += "<tr>";
	html += "<td>Data: "+ order.full_date+"</td>";
	html += "<td>Pag: "+ order.payment_method+" | "+ order.payment_installment+"x</td>";
	html += "<td>Vendedor: "+ order.user+"</td>";
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
	order.products.forEach(function(product){
		html += "<tr>";
		html += "<td>"+ product.category+" "+ product.name+" "+ product.color+" "+ product.size+"</td>";
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
	html += "<td>"+ order.total_value +"</td>";
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
	html += "<td>"+ order.discount+"</td>";
	html += "<td></td>";
	html += "<td></td>";
	html += "<td>- "+ parseInt(order.discount) +"</td>";
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
	html += "<td style='font-weight:bold;font-weight:15px;'>"+ order.final_value+"</td>";
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