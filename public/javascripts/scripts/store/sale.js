$(function(){
	$('#cashier-sale-save-btn').on('click', function(event){
		document.getElementById("cashier-sale-save-btn").disabled = true;

		$.ajax({
			url: '/store/sale/save',
			method: 'post',
			data: {
				sale_customer_cpf: document.getElementById('store-sale-customer').value,
				sale_payment_method: document.getElementById('store-sale-payment-method').value,
				sale_payment_installment: document.getElementById('store-sale-payment-installment').value,
				sale_discount: Cashier.discount,
				sale_total: Cashier.total,
				sale_final: Cashier.final,
				sale_products: JSON.stringify(cashier_product_array)
			},
			success: function(response){
				if(response.msg){
					alert(response.msg);
					document.getElementById("cashier-sale-save-btn").disabled = false;
					return;
				};

				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				alert(response.done);
				clearCashier();
				printCashierSale(response.sale);

				document.getElementById("cashier-sale-save-btn").disabled = false;
			}
		});
	});

	$('#store-sale-filter-btn').on('click', function(event){
		document.getElementById("store-sale-filter-btn").disabled = true;

		let cpf = document.getElementById('store-sale-customer-cpf').value;
		let date = lib.convertDate(document.getElementById('store-sale-date').value);

		$.ajax({
			url: '/store/sale/filter',
			method: 'post',
			data: {
				customer_cpf: cpf,
				sale_date: date
			},
			success: function(response){
				if(response.msg){
					alert(response.msg);
					document.getElementById("store-sale-filter-btn").disabled = false;
					return;
				};

				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				let pageSize = 15;
				let page = 0;
				let sales = response.sales;

				function paging(){
					html = "";
					if(sales.length){
					    for (let i = page * pageSize; i < sales.length && i < (page + 1) * pageSize;i++){
							html += "<tr>";
							html += "<td id='store-sale-id' hidden>"+sales[i].id+"</td>";
							html += "<td><a id='sale-show-btn'>"+sales[i].id+"</a></td>";
							html += "<td>"+sales[i].date+"</td>";
							html += "<td>"+sales[i].customer_cpf+"</td>";
							html += "<td>"+sales[i].customer_name+"</td>";
							html += "<td>"+sales[i].final_value+"</td>";
							html += "<td>"+sales[i].status+"</td>";
							html += "<td><a onclick=printStoreSale("+sales[i].id+")>Imprimir</a></td>";
							html += "</tr>";
						};
						document.getElementById('main-sale-tbl-tbody').innerHTML = html;
						document.getElementById('main-sale-div').style.display = 'block';
					} else {
						alert('Nenhum produto encontrado.');
						document.getElementById('main-sale-tbl-tbody').innerHTML = html;
						document.getElementById('main-sale-div').style.display = 'none';
					};
				    $('#salePageNumber').text('' + (page + 1) + ' de ' + Math.ceil(sales.length / pageSize));
				};

				function saleButtonsPaging(){
				    $('#saleNext').prop('disabled', sales.length <= pageSize || page >= sales.length / pageSize - 1);
				    $('#salePrevious').prop('disabled', sales.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#saleNext').click(function(){
				        if(page < sales.length / pageSize - 1){
				            page++;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    $('#salePrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    paging();
				    saleButtonsPaging();
				});
				document.getElementById("store-sale-filter-btn").disabled = false;
			}
		});
	});

	$('#main-sale-tbl-tbody').on('click', '#sale-show-btn', function(){
		let btn = $(this);btn.css('pointerEvents', 'none');
		let rowEl = $(this).closest('tr');
		let id = rowEl.find('#store-sale-id').text();

		showStoreSale(id);
		btn.css('pointerEvents', 'auto');
	});
});

function showStoreSale(id){
	$.ajax({
		url: '/store/sale/get',
		method: 'post',
		data: {
			sale_id: id
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

			response.sale[0].products = response.products;

			let html = "";

			html += "<tr>";
			html += "<td>Cód:"+response.sale[0].id+"</td>";
			html += "<td>Cliente: "+response.sale[0].customer_name+"</td>";
			html += "<td>CPF: "+response.sale[0].customer_cpf+"</td>";
			html += "<td>Status: "+response.sale[0].status+"</td>";
			html += "</tr>";
			html += "<tr>";
			html += "<td>Data: "+response.sale[0].date+"</td>";
			html += "<td>Pag: "+response.sale[0].payment_method+" | "+ response.sale[0].payment_installment+"x</td>";
			html += "<td>Valor: "+response.sale[0].final_value+"</td>";
			html += "<td>Vendedor: "+ response.sale[0].user+"</td>";
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
			response.sale[0].products.forEach(function(product){
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
			html += "<td>"+ response.sale[0].total_value+"</td>";
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
			html += "<td>"+ response.sale[0].discount+"</td>";
			html += "<td></td>";
			html += "<td></td>";
			html += "<td>- "+ parseInt(response.sale[0].discount) +"</td>";
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
			html += "<td style='font-weight:bold;font-weight:15px;'>"+ response.sale[0].final_value+"</td>";
			html += "</tr>";

			html += "</table>";

			document.getElementById('sale-show-tbody').innerHTML = html;
			document.getElementById('sale-show-box').style.display = 'block';
		}
	});
};

function printStoreSale(id){
	$.ajax({
		url: '/store/sale/get',
		method: 'post',
		data: {
			sale_id: id
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

			response.sale[0].products = response.products;
			printCashierSale(response.sale[0]);
		}
	});
};