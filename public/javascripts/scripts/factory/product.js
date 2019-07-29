$(function(){
	$("#product-save-btn").on('click', function(){
		let btn = $(this);btn.attr('disabled', true);
		let id = document.getElementById('product_id').value;
		let cod = document.getElementById('product_cod').value;
		let name = document.getElementById('product_name').value;
		let type = document.getElementById('product_type').value;
		let color = document.getElementById('product_color').value;
		let size = document.getElementById('product_size').value;
		let value = document.getElementById('product_value').value;

		$.ajax({
			url: '/factory/product/save',
			method: 'post',
			data: { 
				product_id: id,
				product_cod: cod,
				product_name: name,
				product_type: type,
				product_color: color,
				product_size: size,
				product_value: value
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};
				
				if(response.msg){
					alert(response.msg);
					btn.attr('disabled', false);
					return;
				};

				alert(response.done);
				
				$("#product-filter-btn").click();

				document.getElementById('product_id').value = "";
				document.getElementById('product_cod').value = "";
				document.getElementById('product_name').value = "";
				document.getElementById('product_type').value = "";
				document.getElementById('product_color').value = "";
				document.getElementById('product_size').value = "";
				document.getElementById('product_value').value = "";
				btn.attr('disabled', false);
			}
		});
	});

	$("#product-filter-btn").on('click', function(){
		let btn = $(this);btn.attr('disabled', true);
		let type = document.getElementById('src_product_type').value;
		let color = document.getElementById('src_product_color').value;

		$.ajax({
			url: '/factory/product/filter',
			method: 'post',
			data: { 
				product_type: type,
				product_color: color
			},
			success: function(response){
				if(response.unauthorized){
					alert(response.unauthorized);
					window.location.href = '/login';
					return;
				};

				let pageSize = 10;
				let page = 0;
				let products = response.products;

				function paging(){
					html = "<tr><td>Cód</td><td>Tipo</td><td>Nome</td><td>Tamanho</td><td>Cor</td></tr>";
					if(products.length){
					    for (let i = page * pageSize; i < products.length && i < (page + 1) * pageSize;i++){
							html += "<tr>";
							html += "<td id='src_product_id' hidden>"+products[i].id+"</td>";
							html += "<td id='src_product_cod' hidden>"+products[i].cod+"</td>";
							html += "<td><a id='product-show-btn'>"+products[i].cod+"</a></td>";
							html += "<td id='src_product_type'>"+products[i].type+"</td>";
							html += "<td id='src_product_name'>"+products[i].name+"</td>";
							html += "<td id='src_product_size'>"+products[i].size+"</td>";
							html += "<td id='src_product_color'>"+products[i].color+"</td>";
							html += "<td id='src_product_value'>"+products[i].value+"</td>";
							html += "<td ><a id='product-edit-btn'>Editar</a></td>";
							html += "<td><a onclick='removeProduct("+products[i].cod+")'>Excluir</a></td>";
							html += "</tr>";
						};
						document.getElementById('main-product-tbl').innerHTML = html;
						document.getElementById('main-product-div').style.display = 'block';
					} else {
						alert('Nenhum produto encontrado.');
						document.getElementById('main-product-tbl').innerHTML = html;
						document.getElementById('main-product-div').style.display = 'none';
					};
				    $('#productPageNumber').text('' + (page + 1) + ' de ' + Math.ceil(products.length / pageSize));
				};

				btn.attr('disabled', false);

				function saleButtonsPaging(){
				    $('#productNext').prop('disabled', products.length <= pageSize || page >= products.length / pageSize - 1);
				    $('#productPrevious').prop('disabled', products.length <= pageSize || page == 0);
				};

				$(function(){
				    $('#productNext').click(function(){
				        if(page < products.length / pageSize - 1){
				            page++;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    $('#productPrevious').click(function(){
				        if(page > 0){
				            page--;
				            paging();
				            saleButtonsPaging();
				        };
				    });
				    paging();
				    saleButtonsPaging();
				});
			}
		});
	});

	$('#main-product-tbl').on('click', '#product-edit-btn', function(){
		let btn = $(this);btn.css('pointerEvents', 'none');
		let rowEl = $(this).closest('tr');

		let id = rowEl.find('#src_product_id').text();
		let cod = rowEl.find('#src_product_cod').text();
		let name = rowEl.find('#src_product_name').text();
		let type = rowEl.find('#src_product_type').text();
		let color = rowEl.find('#src_product_color').text();
		let size = rowEl.find('#src_product_size').text();
		let value = rowEl.find('#src_product_value').text();

		document.getElementById('product_id').value = id;
		document.getElementById('product_cod').value = cod;
		document.getElementById('product_name').value = name;
		document.getElementById('product_type').value = type;
		document.getElementById('product_color').value = color;
		document.getElementById('product_size').value = size;
		document.getElementById('product_value').value = value;

		btn.css('pointerEvents', 'auto');
	});

	$('#main-product-tbl').on('click', '#product-show-btn', function(){
		let btn = $(this);btn.css('pointerEvents', 'none');
		let rowEl = $(this).closest('tr');
		let cod = rowEl.find('#src_product_cod').text();

		$.ajax({
			url: '/factory/product/show',
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
				html += "<td>"+response.product[0].cod+"</td>";
				html += "<td>"+response.product[0].type+"</td>";
				html += "<td>"+response.product[0].name+"</td>";
				html += "<td>"+response.product[0].size+"</td>";
				html += "<td>"+response.product[0].color+"</td>";
				html += "<td>"+response.product[0].amount+"</td>";
				html += "<td>"+response.product[0].value+"</td>";
				html += "<td><a onclick='productAddImage("+response.product[0].id+")'>add img</a></td>";
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
							htmlImage += "<img src='"+response.product[0].images[i].url+"' style='width:500px;height:500px;'>";
							htmlImage += "<div clas='box-1'>"
							htmlImage += "<br>"
							htmlImage += "<button class='btn-generic-big' onclick='productRemoveImage("+response.product[0].images[i].id+")'>Excluir</button>";
							htmlImage += "</div>"
						};

						document.getElementById('product-show-image').innerHTML = htmlImage;
						document.getElementById('product-show-image').style.display = 'block';
						
					    $('#imagePageNumber').text('' + (page + 1) + ' de ' + Math.ceil(images.length / pageSize));
					};

					btn.attr('disabled', false);

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
					document.getElementById('product-show-image').innerHTML = "SEM IMAGENS";
					// document.getElementById('product-show-image').style.display = 'none';
				};
				btn.css('pointerEvents', 'auto');
			}
		});
	});
});

function hideProduct(){
	document.getElementById('product-show-box').style.display = "none";
};

function removeProduct(cod){
	let r = confirm('Deseja realmente excluir o produto?');
	if(r){
		$.ajax({
			url: '/factory/product/remove',
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

function productAddImage(id){
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
				url: '/factory/product/addImage',
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

					document.getElementById("product-show-box").style.display = "none";
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

function productRemoveImage(id){
	let r = confirm("Deseja realmente excluir a image?");
	if(r){
		$.ajax({
			url: '/factory/product/removeImage',
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

				document.getElementById("product-show-box").style.display = "none";
				alert(response.done);
			}
		});
	};
};
