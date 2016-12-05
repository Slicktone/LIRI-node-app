var keyGrab = require('./keys');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
// var randomTxt = process.argv[5]; // not sure what to require
// var liriCommand = process.argv[2];
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
  if (error) {
    return console.log("There was an error! " + error);
  }
  if (response.statusCode !== 200) {
 	console.log("Uh oh, logging twitter statusCode: " + response.statusCode);
 } else {
   var feedOutput = "";
    for(var i = 0; i < tweets.length; i++) {
      feedOutput += tweets[i].info + "\n";
      feedOutput += tweets[i].text + "\n";
      feedOutput += " - " + tweets[i].created_at + "\n";
    }
     console.log(feedOutput);
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
      var songData = "Artist: " + songInfo.artists[0].name + "\n";
        songData += "Name: " + songInfo.name + "\n";
        songData += "Preview URL: " + songInfo.preview_url + "\n";
        songData += "Album: " + songInfo.album.name + "\n";
        console.log(songData);
    });
}

function Movie(movieLookup) {
  if(!movieLookup) {
    movieLookup = "Mr.Nobody";
  }
  var queryURL = "http://www.omdbapi.com/";
// could not find all the required parameters listed in instructions
var params = {
  t: movieLookup,
  type: "movie",
  y: "year",
  r: "json",
  tomatoes: true,
  plot: "short",
}

request.get({uri: queryURL, qs: params }, function(error, data) {
  if (error, data) {
    return console.log("OMDB Error " + error);
  }
  if (data.statusCode !== 200) {
    console.log("Information cannot be displayed because of: " + data.statusCode);
  }
  // console.log(params);
   else {
     var Movie = JSON.parse(body.data);
     console.log(Movie);
}
});
}

// function random(backStreetBois) {

// }

