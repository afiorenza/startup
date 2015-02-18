$(document).ready(function() {
	var linkSearch = "https://api.spotify.com/v1/search";

	$('#tbArtist').focus();

  function runLoop(pResponse){
    //variables locales
    var vName,vImage,vType,vReleaseDate,vAlbumLink;

    var albums = pResponse['albums'];
    var items = albums['items'];

    $.each(items, function(index, val) {
      vName = val['name'];
      vType = val['album_type'];
      vReleaseDate = val[''];
      vAlbumLink = val['uri'];
      $.each(val['images'], function(index, val){
        vImage = val['url'];
        console.log(vImage);
        return false;
      }); 
      createArticle(index,vName,vImage,vType,vReleaseDate,vAlbumLink);
    });   

  };

	function createArticle(pIndex,pName,pImage,pType,pDate,pLink){
    $('div').append("<article id = " + pIndex + "></article>");
		$('#' + pIndex).append("<h3>" + pName + "</h3>");
		$('#' + pIndex).append("<li><p>Type : " + pType + "</p></li>");
		var subLink = pLink.substring(14);
		$('#' + pIndex).append("<li><a href=http://open.spotify.com/album/" + subLink + ">Listen on Spotify</a></li>");
		$('#' + pIndex).append("<br></br>");
		$('#' + pIndex).append("<img src= " + pImage + ">");	
	};

	$('#btnConfirm').click(function(event) {

    $('div').empty();
		var artistName = $('#tbArtist').val();

		$.ajax({
   			type: 'GET',
    		url: linkSearch,
        dataType: 'json',
    		data:{ 
      			q : artistName,
      			type : "album",
            callback : "foo"
      		},

      		beforeSend : function () {
      		
  			},
  			
  			success : function(response) {
  				runLoop(response);
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