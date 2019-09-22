$(function(){
	$('#cashier-order-save-btn').on('click', function(event){
		document.getElementById("cashier-order-save-btn").disabled = true;

		if(!Cashier.discount || isNaN(Cashier.discount) || Cashier.discount < 0){
			Cashier.discount = 0;
		};

		$.ajax({
			url: '/store/order/save',
			method: 'post',
			data: {
				order_customer_cpf: document.getElementById('store-order-customer').value,
				order_payment_method: document.getElementById('store-order-payment-method').value,
				order_payment_installment: document.getElementById('store-order-payment-installment').value,
				order_discount: Cashier.discount,
				order_total: Cashier.total,
				order_final: Cashier.final,
				order_products: JSON.stringify(cashier_product_array)
			},
			success: function(response){
				if(response.msg){
					alert(response.msg);
					document.getElementById("cashier-order-save-btn").disabled = false;
					return;
				};

				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				alert(response.done);
				clearCashier();
				printCashierOrder(response.order);

				document.getElementById("cashier-order-save-btn").disabled = false;
			}
		});
	});

	$('#store-order-filter-btn').on('click', function(event){
		document.getElementById("store-order-filter-btn").disabled = true;

		let cpf = document.getElementById('store-order-customer-cpf').value;
		let date = lib.convertDate(document.getElementById('store-order-date').value);

		$.ajax({
			url: '/store/order/filter',
			method: 'post',
			data: {
				customer_cpf: cpf,
				order_date: date
			},
			success: function(response){
				if(response.msg){
					alert(response.msg);
					document.getElementById("store-order-filter-btn").disabled = false;
					return;
				};

				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				let pageSize = 15;
				let page = 0;
				let orders = response.orders;

				function paging(){
					html = "";
					if(orders.length){
					    for (let i = page * pageSize; i < orders.length && i < (page + 1) * pageSize;i++){
							html += "<tr>";
							html += "<td id='store-order-id' hidden>"+orders[i].id+"</td>";
							html += "<td><a onclick='showStoreOrder("+orders[i].id+")'>"+orders[i].id+"</a></td>";
							html += "<td>"+orders[i].date+"</td>";
							html += "<td>"+orders[i].customer_cpf+"</td>";
							html += "<td>"+orders[i].customer_name+"</td>";
							html += "<td>"+orders[i].final_value+"</td>";
							html += "<td>"+orders[i].status+"</td>";
							html += "<td><a onclick=printStoreOrder("+orders[i].id+")>Imprimir</a></td>";
							html += "</tr>";
						};
						document.getElementById('main-order-tbl-tbody').innerHTML = html;
						document.getElementById('main-order-div').style.display = 'block';
					} else {
						alert('Nenhum produto encontrado.');
						document.getElementById('main-order-tbl-tbody').innerHTML = html;
						document.getElementById('main-order-div').style.display = 'none';
					};
				    $('#orderPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(orders.length / pageSize));
				};

				function orderButtonsPaging(){
				    $('#orderNext').prop('disabled', orders.length <= pageSize || page >= orders.length / pageSize - 1);
				    $('#orderPrevious').prop('disabled', orders.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#orderNext').click(function(){
				        if(page < orders.length / pageSize - 1){
				            page++;
				            paging();
				            orderButtonsPaging();
				        };
				    });
				    $('#orderPrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            orderButtonsPaging();
				        };
				    });
				    paging();
				    orderButtonsPaging();
				});
				document.getElementById("store-order-filter-btn").disabled = false;
			}
		});
	});
});

function showStoreOrder(id){
	$.ajax({
		url: '/store/order/get',
		method: 'post',
		data: {
			order_id: id
		},
		success: function(response){
			if(response.unauthorized){
				alert(response.unauthorized);
				window.location.href = '/login';
				return;
			};

			if(response.msg){
				alert(response.msg);
				return;
			};

			response.order[0].products = response.products;

			let html = "";

			html += "<tr>";
			html += "<td>Cód:"+response.order[0].id+"</td>";
			html += "<td>Cliente: "+response.order[0].customer_name+"</td>";
			html += "<td>CPF: "+response.order[0].customer_cpf+"</td>";
			html += "<td>Status: "+response.order[0].status+"</td>";
			html += "</tr>";
			html += "<tr>";
			html += "<td>Data: "+response.order[0].full_date+"</td>";
			html += "<td>Pag: "+response.order[0].payment_method+" | "+ response.order[0].payment_installment+"x</td>";
			html += "<td>Valor: "+response.order[0].final_value+"</td>";
			html += "<td>Vendedor: "+ response.order[0].user+"</td>";
			html += "</tr>";

			html += "<br><br>";

			html += "<table border=1 cellspacing=0 cellpadding=2 style='text-align:center;width:100%;font-size:12px;'>";
			html += "<tr>";
			html += "<td>Produto</td>";
			html += "<td>Qtd</td>";
			html += "<td>Val.un.</td>";
			html += "<td></td>";
			html += "<td></td>";
			html += "</tr>";
			response.order[0].products.forEach(function(product){
				html += "<tr>";
				html += "<td>"+ product.category +" "+ product.name+" "+ product.color+" "+ product.size+"</td>";
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
			html += "<td>"+ response.order[0].total_value+"</td>";
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
			html += "<td>"+ response.order[0].discount+"</td>";
			html += "<td></td>";
			html += "<td></td>";
			html += "<td>- "+ parseInt(response.order[0].discount) +"</td>";
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
			html += "<td style='font-weight:bold;font-weight:15px;'>"+ response.order[0].final_value+"</td>";
			html += "</tr>";

			html += "</table>";

			document.getElementById('order-show-tbody').innerHTML = html;
			document.getElementById('order-show-box').style.display = 'block';
		}
	});
};

function printStoreOrder(id){
	$.ajax({
		url: '/store/order/get',
		method: 'post',
		data: {
			order_id: id
		},
		success: function(response){
			if(response.unauthorized){
				alert(response.unauthorized);
				window.location.href = '/login';
				return;
			};

			if(response.msg){
				alert(response.msg);
				return;
			};

			response.order[0].products = response.products;
			printCashierOrder(response.order[0]);
		}
	});
};