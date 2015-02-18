
$(document).ready(function() {

	var link = 'http://bootcamp.aws.af.cm/welcome/';

	$('#section1').fadeIn();	
	
	$('#tbName').focus();

	function highLigth(pText,pName){
		var welc = pText.substring(0,7);
		$('#field').html(welc + ' ' + '<span>' + pName + '</span>' + '!');
	};
  
	$('#btnGetResponse').click(function(){
		
		var name = $('#tbName').val();
    
		$.ajax({
  			type: "GET",
  			url: link + name,
  			dataType: "json",
  	
  			beforeSend : function () {
  			},
  			
  			success : function(response) {
  				var text = response["response"]
  				highLigth(text,name);
  			},
  			
  			done : function() {
    			alert( "success" );
  			},
  			
  			fail : function() {
   				$('#field').css('color','red');
  			},
  			
  			always : function() {}
		});

	});
});