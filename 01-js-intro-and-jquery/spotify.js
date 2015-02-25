$(document).ready(function() {
	var linkSearch = "https://api.spotify.com/v1/search", gData;

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

  function ajaxCall (pArtistName,pCallBack) {
    $.ajax({
        type: 'GET',
        url: linkSearch,
        dataType: 'json',
        data:{ 
            q : pArtistName,
            type : "album",
            callback : "foo",
        },
        
        success : function(response) {
          console.log('ajax success');
          gData = response;     
          rta = "success";
          return pCallBack(rta); 
        },  

        fail : function() {
          rta = 'fail';
          return rta;
        }
      });
  };

	$('#btnConfirm').click(function(event) {

    $('div').empty();
		var artistName = $('#tbArtist').val(),
    resp;

    ajaxCall(artistName,function(resp){
      if (resp == 'success') {
        runLoop(gData);
      } else if (resp == 'fail') {
        $('#campo').css('color','red');
      };
      console.log('bueno');
    });
  });

});