
$(document).ready(function() {

	var link = 'http://bootcamp.aws.af.cm/welcome/';

	$('#seccion1').fadeIn();	
	
	$('#input').focus();

	function colorea(texto,nombre){
		var welc = texto.substring(0,7);
		$('#campo').html(welc + ' ' + '<span>' + nombre + '</span>' + '!');
	};
  
	$('#btn').click(function(){
		
		var name = $('#nombre').val();
			
		$.ajax({
  			type: "GET",
  			url: link + name,
  			dataType: "json",
  	
  			beforeSend : function () {
  			},
  			
  			success : function(response) {
  				var texto = response["response"]
  				colorea(texto,name);
  			},
  			
  			done : function() {
    			alert( "success" );
  			},
  			
  			fail : function() {
   				$('#campo').css('color','red');
  			},
  			
  			always : function() {
  				alert( "Siempre" );
  			}
		});

	});
});