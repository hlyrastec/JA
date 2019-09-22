$(() => {
	$("#factory-product-filter-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);

		$.ajax({
			url: '/factory/storage/filter',
			method: 'post',
			data: $("#factory-product-filter-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};

				let products = response.products;
				let pageSize = 10;
				let page = 0;

				function paging(){
					if(products.length ){
						renderFactoryStorageProducts(response.location, products, pageSize, page);
					} else {
						clearProductTable(response.location);
					};
				};

				btn.attr('disabled', false);

				function buttonsPaging(){
					$('#'+response.location+'ProductNext').prop('disabled', products.length <= pageSize || page >= products.length / pageSize - 1);
					$('#'+response.location+'ProductPrevious').prop('disabled', products.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#'+response.location+'ProductNext').click(function(){
				        if(page < products.length / pageSize - 1){
				            page++;
				            paging();
				            buttonsPaging();
				        };
				    });
				    $('#'+response.location+'ProductPrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            buttonsPaging();
				        };
				    });
				    paging();
				    buttonsPaging();
				});
			}
		});
	});

	$("#factory-storage-insert-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);

		$.ajax({
			url: '/factory/storage/increaseAmount',
			method: 'post',
			data: {
				origin: document.getElementById("factory-storage-insert-origin").value,
				products: JSON.stringify(kart_product_array)	
			},
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};

				if(response.msg){
					alert(response.msg);
					return;
				};

				document.getElementById("factory-storage-insert-origin").value = "";
				document.getElementById('kart-product-tbl-tbody').innerHTML = "";
				kart_product_array = [];
				alert(response.done);
			}
		});
	});

	$("#factory-storage-withdraw-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);

		$.ajax({
			url: '/factory/storage/decreaseAmount',
			method: 'post',
			data: {
				origin: document.getElementById("factory-storage-withdraw-origin").value,
				products: JSON.stringify(kart_product_array)	
			},
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};

				if(response.msg){
					alert(response.msg);
					return;
				};

				document.getElementById("factory-storage-withdraw-origin").value = "";
				document.getElementById('kart-product-tbl-tbody').innerHTML = "";
				kart_product_array = [];
				alert(response.done);
			}
		});
	});
});

function renderFactoryStorageProducts(location, products, pageSize, page){
	var html = "<tr>";
	html += "<td>Cód</td>";
	html += "<td>Tipo</td>";
	html += "<td>Nome</td>";
	html += "<td>Tamanho</td>";
	html += "<td>Cor</td>";
	html += "<td>Qtd</td>";
	html += "</tr>";
	for (let i = page * pageSize; i < products.length && i < (page + 1) * pageSize;i++){
		html += "<tr>";
		html += "<td id='src_product_id' hidden>"+products[i].id+"</td>";
		html += "<td><a onclick='showProduct("+products[i].cod+")'>"+products[i].cod+"</a></td>";
		html += "<td id='src_product_category'>"+products[i].category+"</td>";
		html += "<td id='src_product_name'>"+products[i].name+"</td>";
		html += "<td id='src_product_size'>"+products[i].size+"</td>";
		html += "<td id='src_product_color'>"+products[i].color+"</td>";
		html += "<td id='src_product_color'>"+products[i].amount+"</td>";
		html += "</tr>";
	};
	document.getElementById('factory-storage-product-tbl').innerHTML = html;
	document.getElementById('factory-storage-product-div').style.display = 'block';
	$('#'+location+'ProductPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));

};