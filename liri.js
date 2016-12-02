var keyGrab = require('./keys.js');
var twitter = require('twitter');// process.argv[2];???
// var spotify = require('spotify')// process.argv[3];
// var movie = require('request') //process.argv[4];
// var randomTxt = process.argv[5]; // not sure what to require

function twitterApp (mytweets) {
	// creating the app and pulling the keys
	// can possibly refactor using the keyGrab variable???

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

// using the param variable to search screen name
var params = {screen_name: 'Slicktone310'};
// using the client variable and get method with twitter api documentation
client.get('favorites/list', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}

function spotify(searchSong) {

}

function movie(movieLookup) {

}

function random(backStreetBois) {

}

