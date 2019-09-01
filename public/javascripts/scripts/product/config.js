$(() => {
	// Utilizar form
	$("#product-category-save-form").on('submit', (event) => {
		event.preventDefault();
		$.ajax({
			url: '/product/categorySave',
			method: 'post',
			data: $("#product-category-save-form").serialize(),
			success: (response) => {
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};
				alert(response.done);
			}
		});
	});

	// Utilizar form
	$("#product-color-save-btn").on('click', () => {
		let color_name = document.getElementById('product-color-name').value.replace(/^\s+|\s+$/g, '');
		let color_shortcut = document.getElementById('product-color-shortcut').value.replace(/^\s+|\s+$/g, '');
		if(color_name.length < 3){
			return alert('Nome inválido!');
		};
		if(color_shortcut.length < 2){
			return alert('Abreviação inválida!');
		};
		$.ajax({
			url: '/product/colorAdd',
			method: 'post',
			data: {
				color_name: color_name,
				color_shortcut: color_shortcut
			},
			success: (response) => {
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

// function productCategoryList(location, categories){
// 	var html = "";
// 	html += "<option value=''>Categoria</option>";
// 	categories.forEach((category) => {
// 		html += "<option value='"+category.shortcut+"'>"+category.name+"</option>";
// 	});

// 	if(location == 'create'){
// 		document.getElementById('create-product-filter-category').innerHTML = html;
// 	};
// 	if(location == 'admin'){
// 		document.getElementById('admin-product-filter-category').innerHTML = html;
// 	};
// 	if(location == 'catalog'){
// 		document.getElementById('catalog-product-filter-category').innerHTML = html;
// 	};
// 	if(location == 'kart'){
// 		document.getElementById('kart-product-filter-category').innerHTML = html;
// 	};
// };

function productColorBoxDisplay(){
	let productForm = document.getElementById("product-color-frm");
	if(productForm.style.display == "none"){
		productForm.style.display = "block";	
	} else if(productForm.style.display == "block"){
		productForm.style.display = "none";
	};
};

// function getProductColors(location){
// 	$.ajax({
// 		url: '/product/colorList',
// 		method: 'get',
// 		success: (response) => {
// 			var html = "";
// 			html += "<option value=''>Cor</option>";
// 			response.colors.forEach((color) => {
// 				html += "<option value='"+color.shortcut+"'>"+color.name+"</option>";
// 			});
			
// 			if(location == 'create'){
// 				document.getElementById('create-product-filter-color').innerHTML = html;
// 			};
// 			if(location == 'admin'){
// 				document.getElementById('admin-product-filter-color').innerHTML = html;
// 			};
// 			if(location == 'catalog'){
// 				document.getElementById('catalog-product-filter-color').innerHTML = html;
// 			};
// 			if(location == 'kart'){
// 				document.getElementById('kart-product-filter-color').innerHTML = html;
// 			};
// 		}
// 	});
// };


// function listProductCategory(){
// 	let productForm = document.getElementById("product-categories-box");
// 	if(productForm.style.display == "none"){
// 		productForm.style.display = "block";
// 	} else if(productForm.style.display == "block"){
// 		productForm.style.display = "none";
// 	};

// 	$.ajax({
// 		url: '/product/categoryList',
// 		method: 'get',
// 		success: (response) => {
// 			var html = "<tr>";
// 			html += "<td>Id</td>";
// 			html += "<td>Nome</td>";
// 			html += "<td>Abrev.</td>";
// 			html += "</tr>";

// 			response.categories.forEach((category) => {
// 				html += "<tr>";
// 				html += "<td>"+category.id+"</td>";
// 				html += "<td>"+category.name+"</td>";
// 				html += "<td>"+category.shortcut+"</td>";
// 				// html += "<td><a>edit</a></td>";
// 				// html += "<td><a>remove</a></td>";
// 				html += "</tr>";
// 			});
// 			document.getElementById("product-categories-tbl").innerHTML = html;
// 		}
// 	});
// };