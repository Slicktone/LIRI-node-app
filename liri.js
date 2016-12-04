var keyGrab = require('./keys');
var twitter = require('twitter');
var spotify = require('spotify');
var movie = require('request');
var fs = require('fs');
// var randomTxt = process.argv[5]; // not sure what to require
var userInput = process.argv[2];


// Twitter Lookup
if (userInput === "my-tweets") {
	Twitter();
}
// Spotify Lookup
if (userInput === "spotify-this-song") {
  Spotify();
}
// OMDB Movie Lookup
if (userInput === "movie-this") {
  Movie();
}

function Twitter () {
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


function Spotify(songName) {
// can't get anything except The Sign to show =/

  if(songName === undefined) {
    songName = "The Sign, Ace of Base";
  }

  var songQuery = {
      type: 'track', 
      query: songName, 
      limit: 1
  };

  spotify.search(songQuery, function(error, data) {
      if (error) {
        console.log("Darn! Theres an error: " + error);
        return;
       } 
      //  else {
      //   console.log(JSON.stringify(data, null, 1));
      // }
      var songInfo = data.tracks.items[0];
      console.log("Artist " + songInfo.artists[0].name);
      console.log("Song Name: " + songInfo.name);
      console.log("Preview Link " + songInfo.preview_url);
      console.log("Album " + songInfo.album.name);
  })
}

function Movie(movieLookup) {
  if(!movieLookup) {
    movieLookup = "Mr.Nobody";
  }
  var queryURL = "http://www.omdbapi.com/";

request(queryURL, function(error, response, data) {
  if (response.statusCode !== 200) {
    console.log("Information cannot be displayed because of: " + response.statusCode);
  }
  var result = JSON.parse(data);
  console.log(result);
})
}

// function random(backStreetBois) {

// }

