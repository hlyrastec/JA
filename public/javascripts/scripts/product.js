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
				document.getElementById('create-product-filter-type').value = "";
				document.getElementById('create-product-filter-color').value = "";
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

	$("#product-type-save-btn").on('click', function(){
		let type_name = document.getElementById('product-type-name').value.replace(/^\s+|\s+$/g, '');
		let type_shortcut = document.getElementById('product-type-shortcut').value.replace(/^\s+|\s+$/g, '');
		if(type_name.length < 4){
			return alert('Nome inválido!');
		};
		if(type_shortcut.length < 3){
			return alert('Abreviação inválida!');
		};
		$.ajax({
			url: '/product/addType',
			method: 'post',
			data: {
				type_name: type_name,
				type_shortcut: type_shortcut
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				alert(response.done);
			}
		});
	});

	$("#product-color-save-btn").on('click', function(){
		let color_name = document.getElementById('product-color-name').value.replace(/^\s+|\s+$/g, '');
		let color_shortcut = document.getElementById('product-color-shortcut').value.replace(/^\s+|\s+$/g, '');
		if(color_name.length < 3){
			return alert('Nome inválido!');
		};
		if(color_shortcut.length < 2){
			return alert('Abreviação inválida!');
		};
		$.ajax({
			url: '/product/addColor',
			method: 'post',
			data: {
				color_name: color_name,
				color_shortcut: color_shortcut
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				alert(response.done);
			}
		});
	});
});

function clearProductTable(location){
	document.getElementById(location+"-product-tbl").innerHTML = "SEM PRODUTOS COM ESSAS CORES OU CATEGORIAS";
	$('#'+location+'ProductPrevious').prop('disabled');
	$('#'+location+'ProductNext').prop('disabled');
	$('#'+location+'ProductPageNumber').text('0');
};

function editProduct(cod){
	$.ajax({
		url: '/product/show',
		method: 'post',
		data: { 
			product_cod: cod
		},
		success: (response) => {
			getProductTypes('create');
			getProductColors('create');

			document.getElementById('product-create-frm').style.display = "block";

			setTimeout(() => {
				document.getElementById('product-create-id').value = response.product[0].id;
				document.getElementById('product-create-cod').value = response.product[0].cod;
				document.getElementById('product-create-name').value = response.product[0].name;
				document.getElementById('create-product-filter-type').value = response.product[0].type;
				document.getElementById('create-product-filter-color').value = response.product[0].color;
				document.getElementById('product-create-size').value = response.product[0].size;
				document.getElementById('product-create-value').value = response.product[0].value;
			}, 1000);
		}
	});
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
		html += "<td id='src_product_type'>"+products[i].type+"</td>";
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

function renderCatalogProducts(location, products, pageSize, page){
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
	html += "<td id='src_product_type'>"+products[i].type+"</td>";
	html += "<td id='src_product_name'>"+products[i].name+"</td>";
	html += "<td id='src_product_size'>"+products[i].size+"</td>";
	html += "<td id='src_product_color'>"+products[i].color+"</td>";
	html += "<td id='src_product_value'>"+products[i].value+"</td>";
	html += "</tr>";
	};
	document.getElementById('catalog-product-tbl').innerHTML = html;
	document.getElementById('catalog-product-div').style.display = 'block';
	$('#'+location+'ProductPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));
};

function renderCashierKartProducts(location, products, pageSize, page){
	var html = '';
	products.forEach((product) => {
		html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.type +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
	});
	document.getElementById('kart-product-cod').innerHTML = html;
};

function showProduct(cod){
	$.ajax({
		url: '/product/show',
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
			html += "<td>"+response.product[0].type+"</td>";
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
				let pageSize = 1;
				let page = 0;
				let images = response.product[0].images;

				function paging(){
					let htmlImage = "";
					
				    for (let i = page * pageSize; i < images.length && i < (page + 1) * pageSize;i++){
						htmlImage += "<img src='"+response.product[0].images[i].url+"' style='width:280px;height:320px;'>";
						htmlImage += "<div clas='box-1'>"
						htmlImage += "<br>"
						htmlImage += "<button class='btn-generic-big' onclick='productRemoveImage("+response.product[0].images[i].id+", "+response.product[0].cod+")'>Excluir</button>";
						htmlImage += "</div>"
					};

					document.getElementById('product-show-image').innerHTML = htmlImage;
					document.getElementById('product-show-image').style.display = 'block';
					
				    $('#imagePageNumber').text('' + (page + 1) + ' de ' + Math.ceil(images.length / pageSize));
				};

				// btn.attr('disabled', false);

				function saleButtonsPaging(){
				    $('#imageNext').prop('disabled', images.length <= pageSize || page >= images.length / pageSize - 1);
				    $('#imagePrevious').prop('disabled', images.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#imageNext').click(function(){
				        if(page < images.length / pageSize - 1){
				            page++;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    $('#imagePrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    paging();
				    saleButtonsPaging();
				});
			} else {
				let pageSize = 1;
				let page = 0;
				let images = response.product[0].images;

				document.getElementById('product-show-image').innerHTML = "SEM IMAGENS";
			    
				$('#imagePageNumber').text('0');
			    function saleButtonsPaging(){
				    $('#imageNext').prop('disabled', images.length <= pageSize || page >= images.length / pageSize - 1);
				    $('#imagePrevious').prop('disabled', images.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#imageNext').click(function(){
				        if(page < images.length / pageSize - 1){
				            page++;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    $('#imagePrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    saleButtonsPaging();
				});
				// document.getElementById('product-show-image').style.display = 'none';
			};
			// btn.css('pointerEvents', 'auto');
		}
	});
}

function hideProduct(){
	document.getElementById('product-show-box').style.display = "none";
};

function removeProduct(cod){
	let r = confirm('Deseja realmente excluir o produto?');
	if(r){
		$.ajax({
			url: '/product/remove',
			method: 'post',
			data: {
				product_cod: cod
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				alert(response.done);
				$("#product-filter-form").submit();
			}
		});
	};
};

function productAddImage(id, cod){
	let image = prompt("Preencha com a URL da imagem");
	if(image){
		if(image.length < 7){
			return alert('URL inválida!');
		};
		if(image.length > 200){
			return alert('URL inválida!');
		};
		checkImage(image);
		let img = '<img src="'+ image +'" />';
		$(img).on("load", () =>  {
			$.ajax({
				url: '/product/addImage',
				method: 'post',
				data: {
					product_id: id,
					image_url: image
				},
				success: (response) => {
					if(response.unauthorized){
						alert(response.unauthorized);
						window.location.href = '/login';
						return;
					};

					showProduct(cod);
					alert(response.done);
				}
			});	
		}).bind('error', () =>  {
			return alert('URL inválida!');
		});
	} else {
		return;
	};
};

function productRemoveImage(id, cod){
	let r = confirm("Deseja realmente excluir a image?");
	if(r){
		$.ajax({
			url: '/product/removeImage',
			method: 'post',
			data: {
				image_id: id
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				showProduct(cod);
				alert(response.done);
			}
		});
	};
};

function getProductTypes(location){
	$.ajax({
		url: '/product/getTypes',
		method: 'get',
		success: (response) => {
			var html = "";
			html += "<option value=''>Categoria</option>";
			response.types.forEach((type) => {
				html += "<option value='"+type.shortcut+"'>"+type.name+"</option>";
			});

			if(location == 'create'){
				document.getElementById('create-product-filter-type').innerHTML = html;
			};
			if(location == 'admin'){
				document.getElementById('admin-product-filter-type').innerHTML = html;
			};
			if(location == 'catalog'){
				document.getElementById('catalog-product-filter-type').innerHTML = html;
			};
			if(location == 'kart'){
				document.getElementById('kart-product-filter-type').innerHTML = html;
			};
		}
	});
};

function getProductColors(location){
	$.ajax({
		url: '/product/getColors',
		method: 'get',
		success: (response) => {
			var html = "";
			html += "<option value=''>Cor</option>";
			response.colors.forEach((color) => {
				html += "<option value='"+color.shortcut+"'>"+color.name+"</option>";
			});
			
			if(location == 'create'){
				document.getElementById('create-product-filter-color').innerHTML = html;
			};
			if(location == 'admin'){
				document.getElementById('admin-product-filter-color').innerHTML = html;
			};
			if(location == 'catalog'){
				document.getElementById('catalog-product-filter-color').innerHTML = html;
			};
			if(location == 'kart'){
				document.getElementById('kart-product-filter-color').innerHTML = html;
			};
		}
	});
};

function listProductCategory(){
	let productForm = document.getElementById("product-categories-box");
	if(productForm.style.display == "none"){
		productForm.style.display = "block";
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";
	};

	$.ajax({
		url: '/product/getTypes',
		method: 'get',
		success: (response) => {
			var html = "<tr>";
			html += "<td>Id</td>";
			html += "<td>Nome</td>";
			html += "<td>Abrev.</td>";
			html += "</tr>";

			response.types.forEach((type) => {
				html += "<tr>";
				html += "<td>"+type.id+"</td>";
				html += "<td>"+type.name+"</td>";
				html += "<td>"+type.shortcut+"</td>";
				// html += "<td><a>edit</a></td>";
				// html += "<td><a>remove</a></td>";
				html += "</tr>";
			});
			document.getElementById("product-categories-tbl").innerHTML = html;
		}
	});
};

function displayProductTypeBox(){
	let productForm = document.getElementById("product-type-frm");
	if(productForm.style.display == "none"){
		productForm.style.display = "block";
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";
	};
};

function displayProductColorBox(){
	let productForm = document.getElementById("product-color-frm");
	if(productForm.style.display == "none"){
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";
	};
};

function displayProductCreateFrm(location){
	let productForm = document.getElementById("product-create-frm");
	if(productForm.style.display == "none"){
		getProductTypes(location);
		getProductColors(location);
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";	
	};
};

function displayProductFilterFrm(location){
	let productForm = document.getElementById("product-filter-box");
	if(productForm.style.display == "none"){
		getProductTypes(location);
		getProductColors(location);
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";	
	};
};

function displayProductSelectFrm(location){
	let productForm = document.getElementById("product-select-box");
	if(productForm.style.display == "none"){
		getProductTypes(location);
		getProductColors(location);
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";	
	};
};