$(document).ready(function() {
	$('#art-gallery').on('submit', function(e){
		e.preventDefault();
		$.ajax({
			method: 'POST',
			url: '/artworks',
			data: $('#art-form').serialize(),
      		success: onSuccess,
      		error: onError
		});	
	});

  function onSuccess(newArtworkResponse){
    console.log(newArtworkResponse);
  }

  function onError(jqXHR, status, error){
    console.log('error:', error);
  }





});

