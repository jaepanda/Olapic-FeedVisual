$(document).ready(function(){

	$( "#feedinput" ).submit(function( event ) {

		$('#error-msg, #success-msg, #warning-msg').fadeOut(500);

		$('#products-list').text('');

		event.preventDefault();

		$.ajax({
			type: "GET",
			url: "validate.php?url=" + $('#feedurl').val(),
			dataType: "json",
			success: function(e) {
				console.log(e);

				if (e.error) {
					$('#feedinput').toggleClass('has-error');
					$('#error-msg').fadeIn(500).text(e.message);
				} else {
					$('#success-msg').fadeIn(500).text('Success! Here are the results:');

					var products = e.products;

                    for(var product in products){
                        var theProduct = products[product];
                        
                        var product = '<div class="col-sm-3">'
                        	+ '<div class="thumbnail">'
        						+ '<img src="'+theProduct.imageUrl+'" alt="">'
        						+ '<div class="caption">'
        							+ '<h3>'+theProduct.name+'</h3>'
        						+ '</div>';

						for (var c in theProduct.children) {
							// product += '<img src="'+theProduct.children[c].imageUrl+'" class="child-product" />';

							product += '<div class="media">';
							product += '<a class="pull-left" href="#">';
							product += '<img class="media-object child-product" src="'+theProduct.children[c].imageUrl+'" alt="...">';
							product += '</a>';
							product += '<div class="media-body">';
							product += '<h4 class="media-heading">'+theProduct.children[c].color+'</h4>';
							product += '</div>';
							product += '</div>';
						}

        				product += '</div>';
        				product += '</div>';
                        
                        $('#products-list').append(product);
                    }
				}
			}
		});

		return false;

	});


});

$( document ).ajaxStart(function() {
	$('#loading-wrapper').fadeIn(500);
});

$( document ).ajaxStop(function() {
	$('#loading-wrapper').fadeOut(500);
});