$(function(){
	$("#product-save-btn").on('click', function(){
		let btn = $(this);btn.attr('disabled', true);
		let id = document.getElementById('product_id').value.replace(/^\s+|\s+$/g, '');
		let cod = parseInt(document.getElementById('product_cod').value.replace(/^\s+|\s+$/g, ''));
		let name = document.getElementById('product_name').value.replace(/^\s+|\s+$/g, '');
		let type = document.getElementById('product_type').value;
		let color = document.getElementById('product_color').value;
		let size = document.getElementById('product_size').value;
		let value = document.getElementById('product_value').value;

		if(isNaN(value) || value < 0 || value > 999){
			return alert('O valor do produto é inválido!');	
		};

		$.ajax({
			url: '/product/save',
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
				document.getElementById('product_size').value = "";
				document.getElementById('product_value').value = "";
				btn.attr('disabled', false);
			}
		});
	});

	$('#main-product-tbl').on('click', '#product-edit-btn', function(){
		let btn = $(this);btn.css('pointerEvents', 'none');
		let rowEl = $(this).closest('tr');

		let id = rowEl.find('#src_product_id').text();
		let cod = parseInt(rowEl.find('#src_product_cod').text());
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