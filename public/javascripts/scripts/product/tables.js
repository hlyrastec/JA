function hideProduct(){
	document.getElementById('product-show-box').style.display = "none";
};

function clearProductTable(location){
	document.getElementById(location+"-product-tbl").innerHTML = "SEM PRODUTOS COM ESSAS CORES OU CATEGORIAS";
	$('#'+location+'ProductPrevious').prop('disabled');
	$('#'+location+'ProductNext').prop('disabled');
	$('#'+location+'ProductPageNumber').text('0');
};

//
	// Mostrar a tabela de produtos na área de administração
//
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

function renderKartProducts(location, products, pageSize, page){
	var html = '';
	products.forEach((product) => {
		html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.category +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
	});
	document.getElementById('kart-product-cod').innerHTML = html;
};

function renderCashierKartProducts(location, products, pageSize, page){
	var html = '';
	products.forEach((product) => {
		html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.category +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
	});
	document.getElementById('kart-product-cod').innerHTML = html;
};