var express = require('express'); //this app.js requires use of the express 'module' store the 'link' to this module in 'things' below
var app = express(); //not 100% on this. express is a function that is stored in app, but I don't know what that function is
var bodyParser = require('body-parser'); //this app.js requires use of the express 'module' store the 'link' to this module in 'things' below

app.use(express.static('public')); // calls the express() function uses it checks to see if the requested 'thing' is static, if it is, it looks in the public folder

app.use(bodyParser.urlencoded({extended: true}));//bodyParser checks to see if the 'thing' is url encoded? If so, runs the function inside of body-parser?

var songList = [ //created starter songs
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) { //if there is a get request AND the get request is looking for /songs url we run the function
  res.send(songList); //we respond by sending teh songList Array
});

app.post('/newSong', function(req, res){ //if there is a post request AND the request is looking in /newSong we run the function
  var newSong = req.body; //we set newSong to req.body the req.body is DATA so newSong is the 'data' that was stored in our post request and that is equal to our newSongObject that the users created with the inputs
  if(newSong.artist !== "Justin Bieber"){ //if the new song added DOES NOT HAVE Justin Bieber as the artist, the song should be successfully added
    songList.push(newSong); //push newSong/req.body/data/newSongObject to the songListArray
    console.log(songList); //logging to make sure it works
    res.sendStatus(200); //success!
  } else {
    res.sendStatus(500); //ERROR (damn you Justin Bieber)
  }
});

app.listen(3000); //listen runs once on load and continues running
