var cashier_product_array = [];

$(() => {
	$('#main-product-tbl').on('click', '#store-product-show-btn', function(){
		let btn = $(this);btn.css('pointerEvents', 'none');
		let rowEl = $(this).closest('tr');
		let cod = rowEl.find('#src_product_cod').text();
		
		$.ajax({
			url: '/store/product/show',
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