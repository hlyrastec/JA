function clearProductTable(location){
	document.getElementById(location+"-product-tbl").innerHTML = "SEM PRODUTOS COM ESSAS CORES OU CATEGORIAS";
	$('#'+location+'ProductPrevious').prop('disabled');
	$('#'+location+'ProductNext').prop('disabled');
	$('#'+location+'ProductPageNumber').text('0');
};



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
	html += "<td id='src_product_category'>"+products[i].category+"</td>";
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
		html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.category +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
	});
	document.getElementById('kart-product-cod').innerHTML = html;
};


function displayProductFilterFrm(location){
	let productForm = document.getElementById("product-filter-box");
	if(productForm.style.display == "none"){
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";	
	};
};

function displayProductSelectFrm(location){
	let productForm = document.getElementById("product-select-box");
	if(productForm.style.display == "none"){
		let product_categories = productCategoryList();
		console.log(product_categories);
		// getProductColors(location);
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";	
	};
};