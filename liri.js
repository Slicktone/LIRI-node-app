var keyGrab = require('./keys.js');
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


// creating the param variable to search screen name
var params = {screen_name: 'slicktone310', count: 20};
// using the client variable and get method with twitter api documentation
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    return console.log("There was an error! " + error);
  }
  else if (response.statusCode !== 200) {
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


var Spotify = function(songName) {
  
  if (songName === undefined) {
    songName = "What\"s my age again";
  }

  spotify.search({
    type: "track",
    query: songName
  }, function(err, data) {
    if (err) {
      console.log("There's an error! Here!: " + err);
      return;
    }

    var songs = data.tracks.items;

    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s): " + songs[i].artists.map(getArtistNames));
      console.log("song name: " + songs[i].name);
      console.log("preview song: " + songs[i].preview_url);
      console.log("album: " + songs[i].album.name);
      console.log("========================================");
    }
  });
};


function Twitter () {
  var client = new twitter({
    consumer_key: keyGrab.twitterKeys.consumer_key,
    consumer_secret: keyGrab.twitterKeys.consumer_secret,
    access_token_key: keyGrab.twitterKeys.access_token_key,
    access_token_secret: keyGrab.twitterKey.access_token_secret
  });

  var params = {
    screen_name: "cnn"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if(!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};

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

