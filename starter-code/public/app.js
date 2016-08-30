console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
  	$('#guess-number-form').on('submit', function (e) {
  		e.preventDefault();
	  $.ajax({
	  	method: 'GET',
	  	url: '/pickanumber',
	  	data: $('#guess-number-form').serialize(), //?number=10
	  	
	  	success: onSuccess,
	  	error: onError

	  });
	});

  	$('#target-number-form').on('submit', function(e) {
  		e.preventDefault();
  		$.ajax({
  			method: 'POST',
  			url: '/pickanumber',
  			data: $('#target-number-form').serialize(),
  			success: onSuccess2,
  			error: onError
  		});
  	});

});

function onSuccess(guessResponse) {
	$('body').append('<h3>' + guessResponse + '</h3>');
}

function onSuccess2(targetResponse) {
	console.log(targetResponse);
	$('#target-number-form')[0].reset();
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}

