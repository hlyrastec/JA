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

				let pageSize = 100;
				let page = 0;
				let sales = response.sales;

				function paging(){
					html = "";
					if(sales.length){
					    for (let i = page * pageSize; i < sales.length && i < (page + 1) * pageSize;i++){
							html += "<tr>";
							html += "<td id='store-sale-id'>"+sales[i].id+"</td>";
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
});

function printStoreSale(id){
	$.ajax({
		url: '/store/sale/print',
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