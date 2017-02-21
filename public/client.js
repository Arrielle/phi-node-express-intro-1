$(document).ready(function(){
  console.log('jquery was correctly sourced!');

  getAllSongs();  //calls the function getAllSongs 
  
  
  function getAllSongs() {
    $.ajax({
      type: 'GET', //this is a GET request, which means we'll be requesting something from the server 
      url: '/songs', //url is technicall WHATEVERSITEYOU'REON/songs we're making this 'url' so that we can call it in our app.js
      success: function(response) {  //if the get is successful, 
        console.log('response', response); //we have a 200 success and are console.log'ing' the response (200)
      },
      error: function(error) { //if the get is unsuccessful
        console.log('error', error); //we have a 500 error and log error (500)
      }
    });
  }

  $('#addSongButton').on('click', function(){ //when the addSongButton is clicked
    var newSongTitle = $('#title').val(); //whatever is in the title input is stored in newSongTitle
    var newSongArtist = $('#artist').val(); //whatever is in the artist input is stored in the newSongArtis
    var newSongObject = { //creating a new song object
      title: newSongTitle, //which takes in whatever was in the title input (stored in the newSongTitle variable)
      artist: newSongArtist //which takes in whatever was in the artist input (stored in the newSongArtist variable)
    };
    console.log(newSongObject); //checking to make sure that the object was created correctly
    $.ajax({
      type: 'POST', //this is a POST (request? demand?) which means we'll be requesting data from the server??? 
      url: '/newSong', //creating newSong url
      data: newSongObject, //newSongObject is stored as data
      success: function(response) { //on success 200
        console.log('response', response);
        getAllSongs();
      },
      error: function(error) { //on failure 500
        console.log('error', error);
      }
    });
  });

});
