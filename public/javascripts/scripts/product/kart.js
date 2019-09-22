var kart_product_array = [];

$(() => {
	// Adicionar produto ao carrinho do caixa e todas suas verificações
	$('#kart-product-select-form').on('submit', function(event){
		event.preventDefault();

		let cod = document.getElementById('kart-product-cod').value;
		let amount = parseInt(document.getElementById('kart-product-amount').value);
		
		if(cod!='' && cod!='0'){
		} else {
			alert('Favor selecionar um produto');
			return;
		};

		for(i in kart_product_array){
			if(cod == kart_product_array[i].cod){
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

				kart_product_array.push(product);

				let product_tbody = document.getElementById('kart-product-tbl-tbody');
				
				let html = "<tr>";
				html += "<td id='kart-product-id' hidden>"+ product.id +"</td>";
				html += "<td id='kart-product-cod' hidden>"+product.cod+"</td>";
				html += "<td><a onclick='showProduct("+product.cod+")'>"+product.cod+"</a></td>";
				html += "<td id='kart-product-info'>"+ product.category +" | "+ product.name +" | "+ product.color +" | "+ product.size +"</td>";
				html += "<td id='kart-product-amount-remove-btn'><a>-</a></td>";
				html += "<td id='kart-product-amount'>"+ product.amount +"</td>";
				html += "<td id='kart-product-amount-add-btn'><a class='kart-product-amount-btn'>+</a></td>";
				html += "<td><a id='kart-product-remove-btn'>rem</a></td>";
				html += "</tr>";

				product_tbody.innerHTML += html;
			}
		});
	});


	$('table').on('click', '#kart-product-amount-remove-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#kart-product-id').text();

		if(parseInt(rowEl.find('#kart-product-amount').text())>1){
			for(i in kart_product_array){
				if(product_id == kart_product_array[i].id){
					kart_product_array[i].total_value = kart_product_array[i].value * (parseInt(rowEl.find('#kart-product-amount').text()) - 1);
					rowEl.find('#kart-product-total_value').text(kart_product_array[i].total_value);
				};
			};
			rowEl.find('#kart-product-amount').text(parseInt(rowEl.find('#kart-product-amount').text()) - 1);
			kart_product_array.forEach(function(product){
				if(product.id==product_id){
					product.amount = parseInt(rowEl.find('#kart-product-amount').text());
				};
			});
		};
	});

	$('table').on('click', '#kart-product-amount-add-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#kart-product-id').text();
		let product_cod = rowEl.find('#kart-product-cod').text();

		$.ajax({
			url: '/product/get',
			method: 'post',
			data: { product_cod: product_cod },
			success: function(response){
				// if(response.product[0].amount>=parseInt(rowEl.find('#kart-product-amount').text())+1){
					for(i in kart_product_array){
						if(product_cod == kart_product_array[i].cod){
							kart_product_array[i].total_value = kart_product_array[i].value * (parseInt(rowEl.find('#kart-product-amount').text()) + 1);
							rowEl.find('#kart-product-total_value').text(kart_product_array[i].total_value);
						};
					};
					rowEl.find('#kart-product-amount').text(parseInt(rowEl.find('#kart-product-amount').text()) + 1);
					kart_product_array.forEach(function(product){
						if(product.id==product_id){
							product.amount = parseInt(rowEl.find('#kart-product-amount').text());
						};
					});
				// } else {
					// return alert('Não há mais deste produto em estoque.');
				// };
			}
		});
	});

	$('table').on('click', '#kart-product-remove-btn', function(){
		let rowEl = $(this).closest('tr');
		let product_id = rowEl.find('#kart-product-id').text();
		rowEl[0].parentNode.removeChild(rowEl[0]);

		let newArray = [];
		for(let i in kart_product_array){
			if(product_id!=kart_product_array[i].id){
				newArray.push(kart_product_array[i]);
			};
		};
		kart_product_array = newArray;
	});
});