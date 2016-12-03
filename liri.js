var keyGrab = require('./keys');
var twitter = require('twitter');
var spotify = require('spotify');
var movie = require('request');
var fs = require('fs');
// var randomTxt = process.argv[5]; // not sure what to require
var userInput = process.argv[2];

// Twitter Stuff
if (userInput === "my-tweets") {
	twitterApp();
}

function twitterApp () {
var client = new twitter({
  consumer_key: keyGrab.consumer_key,
  consumer_secret: keyGrab.consumer_secret,
  access_token_key: keyGrab.access_token_key,
  access_token_secret: keyGrab.access_token_secret
});



// creating the param variable to search screen name
var params = {screen_name: 'slicktone310', count: 20};
// using the client variable and get method with twitter api documentation
client.get('favorites/list', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  if (response.statusCode !== 200) {
 	console.log("Uh oh, logging statusCode: " + response.statusCode);
 }
});
}


// function spotify(searchSong) {

// }

// function movie(movieLookup) {

// }

// function random(backStreetBois) {

// }

