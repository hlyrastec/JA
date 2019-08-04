var product_array = [];

$(function(){
	$('#product-form-filter').on('submit', function(event){
		event.preventDefault();
		var product_cod = document.getElementById('src-product-cod').value.replace(/^\s+|\s+$/g, '');
		var product_type = document.getElementById('src-product-type').value;
		var product_color = document.getElementById('src-product-color').value;

		if(isNaN(product_cod) || product_cod < 0 || product_cod > 9999){
			product_cod = "";
		};

		$.ajax({
			url: '/store/product/filter',
			method: 'post',
			data: {
				product_cod: product_cod, 
				product_type: product_type, 
				product_color: product_color
			},
			success: function(response) {
				var product_select = document.getElementById('cashier-product-select');
				var html = '';
				response.products.forEach(function(product){
					html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.type +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
				});
				product_select.innerHTML = html;
			}
		});
	});
});