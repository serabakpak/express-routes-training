// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function(req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});

// Gallery View Route
app.get('/art-gallery', function(req, res) {
	res.sendFile('views/art-gallery.html' , { root : __dirname});
});

// The Number Guessing Game
var targetNum = 10;

app.get('/pickanumber', function(req, res) {
	var userNum = req.query.number;
	//res.send(userNum);
	if (userNum > targetNum) {
		res.send('Too High!');
	}
	else if (userNum < targetNum) {
		res.send('Too Low!');
	}
	else if (userNum == targetNum) {
		res.send('Nailed It!');
	}
});

app.post('/pickanumber', function(req, res) {
	targetNum = req.body.number;
	res.send('New target number is: ' + targetNum);
});

//Gallery
var artworks = [];

app.get('/artworks', function(req, res) {
	res.json(artworks);
});

app.post('artworks', function(req, res) {
	var newArtwork = {
		title: req.body.title,
		artist: req.body.artist,
		description: req.body.description
	};
	artworks.push(newArtwork);
	//res.send(artworks);
});



// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
