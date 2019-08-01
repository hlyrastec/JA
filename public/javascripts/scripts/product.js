var product_array = [];

$(function(){
	$('#product-form-filter').on('submit', function(event){
		event.preventDefault();
		var product_type = document.getElementById('get-product-type').value;
		var product_color = document.getElementById('get-product-color').value;
		$.ajax({
			url: '/store/product/filter',
			method: 'post',
			data: {
				product_type: product_type, 
				product_color: product_color
			},
			success: function(response) {
				var product_select = document.getElementById('cashier-product-select');
				var html = '<option value="0">Produto</option>';
				response.products.forEach(function(product){
					html += '<option value="'+product.cod+'">#'+ product.cod +' | '+ product.type +' | '+ product.name +' | '+ product.size +' | '+ product.color +'</option>';
				});
				product_select.innerHTML = html;
			}
		});
	});
});