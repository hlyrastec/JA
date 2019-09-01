var product_array = [];

$(function(){
	$("#product-create-form").on('submit', (event) => {
		event.preventDefault();
		document.getElementById('product-create-submit').disabled = true;

		$.ajax({
			url: '/product/save',
			method: 'post',
			data: $("#product-create-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};
				
				if(response.msg){
					alert(response.msg);
					document.getElementById('product-create-submit').disabled = false;
					return;
				};

				alert(response.done);
				
				document.getElementById('product-create-id').value = "";
				document.getElementById('product-create-cod').value = "";
				document.getElementById('product-create-category').value = "";
				document.getElementById('product-create--color').value = "";
				document.getElementById('product-create-name').value = "";
				document.getElementById('product-create-name').value = "";
				document.getElementById('product-create-size').value = "";
				document.getElementById('product-create-value').value = "";

				$("#product-filter-form").submit();

				document.getElementById('product-create-submit').disabled = false;
			}
		});
	});

	$("#product-filter-form").on('submit', (event) => {
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);

		$.ajax({
			url: '/product/filter',
			method: 'post',
			data: $("#product-filter-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};

				let products = response.products;
				let pageSize = 10;
				let page = 0;

				function paging(){
					if(products.length){
						if(response.location == 'admin'){
							renderAdminProducts(response.location, products, pageSize, page);
						} else if(response.location == 'catalog'){
							renderCatalogProducts(response.location, products, pageSize, page);
						} else if(response.location == 'kart'){
							renderCashierKartProducts(response.location, products, pageSize, page);
						};
					} else {
						if(response.location == 'admin'){
							clearProductTable(response.location);
						} else if(response.location == 'catalog'){
							clearProductTable(response.location);
						} else if(response.location == 'kart'){
							alert("Não há produtos com estas categorias");
						};
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
});

function showProduct(cod){
	$.ajax({
		url: '/product/get',
		method: 'post',
		data: { 
			product_cod: cod
		},
		success: (response) => {
			if(response.unauthorized){
				alert(response.unauthorized);
				window.location.href = '/login';
				return;
			};

			// document.getElementById('product-show-tbody').innerHTML = "";
			let html = "";
			html += "<tr>";
			html += "<td id='show-product-id'>"+response.product[0].cod+"</td>";
			html += "<td>"+response.product[0].category+"</td>";
			html += "<td>"+response.product[0].name+"</td>";
			html += "<td>"+response.product[0].size+"</td>";
			html += "<td>"+response.product[0].color+"</td>";
			html += "<td>"+response.product[0].amount+"</td>";
			html += "<td>"+response.product[0].value+"</td>";
			html += "<td><a onclick='productAddImage("+response.product[0].id+", "+response.product[0].cod+")'>add img</a></td>";
			html += "<td><a onclick='hideProduct()'>Esconder</a></td>";
			html += "</tr>";

			document.getElementById('product-show-tbody').innerHTML = html;
			document.getElementById('product-show-box').style.display = 'block';

			if(response.product[0].images.length){
				productImagePagination(response.product[0].images, response.product[0].cod);
			} else {
				document.getElementById('product-image-show').innerHTML = "SEM IMAGENS";
				document.getElementById('imagePageNumber').innerHTML = '0';
				document.getElementById('imagePrevious').disabled = true;
				document.getElementById('imageNext').disabled = true;
			};
		}
	});
};

function productImagePagination(images, product_cod){
	let pageSize = 1;
	let page = 0;

	function paging(){
		let htmlImage = "";
		
	    for (let i = page * pageSize; i < images.length && i < (page + 1) * pageSize;i++){
			htmlImage += "<img src='"+images[i].url+"' style='width:280px;height:320px;'>";
			htmlImage += "<div clas='box-1'>";
			htmlImage += "<br>";
			htmlImage += "<button class='btn-generic-big' onclick='productRemoveImage("+images[i].id+", "+product_cod+")'>Excluir</button>";
			htmlImage += "</div>";
		};

		document.getElementById('product-image-show').innerHTML = htmlImage;
		document.getElementById('product-image-show').style.display = 'block';
		
	    $('#imagePageNumber').text('' + (page + 1) + ' de ' + Math.ceil(images.length / pageSize));
	};

	function saleButtonsPaging(){
	    $('#imageNext').prop('disabled', images.length <= pageSize || page >= images.length / pageSize - 1);
	    $('#imagePrevious').prop('disabled', images.length <= pageSize || page == 0);
	};

	$(() => {
	    $('#imageNext').click(() => {
	        if(page < images.length / pageSize - 1){
	            page++;
	            paging();
	            saleButtonsPaging();
	        };
	    });
	    $('#imagePrevious').click(() => {
	        if(page > 0){
	            page--;
	            paging();
	            saleButtonsPaging();
	        };
	    });
	    paging();
	    saleButtonsPaging();
	});
};

function productCategoryList(form, location){
	$.ajax({
		url: '/product/categoryList',
		method: 'get',
		success: (response) => {
			var html = "";
			html += "<option value=''>Categoria</option>";
			response.categories.forEach((category) => {
				html += "<option value='"+category.shortcut+"'>"+category.name+"</option>";
			});

			document.getElementById("product-"+location+"-category").innerHTML = html;
		}
	});
};

function displayProductFilterForm(form, location){
	css.displayForm(form);
	productCategoryList(form, location);
};

function renderAdminProducts(location, products, pageSize, page){
	var html = "<tr>";
	html += "<td>Cód</td>";
	html += "<td>Tipo</td>";
	html += "<td>Nome</td>";
	html += "<td>Tamanho</td>";
	html += "<td>Cor</td>";
	html += "<td>Valor</td>";
	html += "</tr>";
	for (let i = page * pageSize; i < products.length && i < (page + 1) * pageSize;i++){
		html += "<tr>";
		html += "<td id='src_product_id' hidden>"+products[i].id+"</td>";
		html += "<td><a onclick='showProduct("+products[i].cod+")'>"+products[i].cod+"</a></td>";
		html += "<td id='src_product_category'>"+products[i].category+"</td>";
		html += "<td id='src_product_name'>"+products[i].name+"</td>";
		html += "<td id='src_product_size'>"+products[i].size+"</td>";
		html += "<td id='src_product_color'>"+products[i].color+"</td>";
		html += "<td id='src_product_value'>"+products[i].value+"</td>";
		html += "<td ><a onclick='editProduct("+products[i].cod+")'>Edit</a></td>";
		html += "<td><a onclick='removeProduct("+products[i].cod+")'>Rem</a></td>";
		html += "</tr>";
	};
	document.getElementById('admin-product-tbl').innerHTML = html;
	document.getElementById('admin-product-div').style.display = 'block';
	$('#'+location+'ProductPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));
};

function editProduct(cod){
	$.ajax({
		url: '/product/get',
		method: 'post',
		data: { 
			product_cod: cod
		},
		success: (response) => {
			displayProductFilterForm('product-create-form', 'create');
			// getProductColors('create');

			document.getElementById('product-create-form').style.display = "block";

			setTimeout(() => {
				document.getElementById('product-create-id').value = response.product[0].id;
				document.getElementById('product-create-cod').value = response.product[0].cod;
				document.getElementById('product-create-name').value = response.product[0].name;
				document.getElementById('product-create-category').value = response.product[0].category;
				document.getElementById('product-create-color').value = response.product[0].color;
				document.getElementById('product-create-size').value = response.product[0].size;
				document.getElementById('product-create-value').value = response.product[0].value;
			}, 1000);
		}
	});
};