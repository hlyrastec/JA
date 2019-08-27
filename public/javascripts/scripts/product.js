var product_array = [];

$(function(){
	$("#product-filter-form").on('submit', function(event){
		event.preventDefault();
		let btn = $(this);btn.attr('disabled', true);

		$.ajax({
			url: '/product/filter',
			method: 'post',
			data: $("#product-filter-form").serialize(),
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					return window.location.href = '/login';
				};

				let pageSize = 10;
				let page = 0;
				let products = response.products;

				function paging(){
					if(products.length){
						if(response.location == 'catalog'){
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
				    		$('#'+response.location+'ProductPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));
						} else if(response.location == 'admin'){
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
								html += "<td ><a id='product-edit-btn'>Edit</a></td>";
								html += "<td><a onclick='removeProduct("+products[i].cod+")'>Rem</a></td>";
								html += "</tr>";
							};
							document.getElementById('admin-product-tbl').innerHTML = html;
							document.getElementById('admin-product-div').style.display = 'block';
				    		$('#'+response.location+'ProductPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));
						} else if(response.location == 'kart'){
							var html = '';
							response.products.forEach(function(product){
								html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.type +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
							});
							document.getElementById('kart-product-cod').innerHTML = html;
						};
					} else {
						alert('Nenhum produto encontrado.');
						document.getElementById('admin-product-tbl').innerHTML = html;
						document.getElementById('admin-product-div').style.display = 'none';
				    	$('#adminProductPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));
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
		url: '/product/show',
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
				$("#product-filter-btn").click();
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
		$(img).on("load", function() {
			$.ajax({
				url: '/product/addImage',
				method: 'post',
				data: {
					product_id: id,
					image_url: image
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
		}).bind('error', function() {
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