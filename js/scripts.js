//back-end//
function Album(artist, title, image) {
  this.artist = artist;
  this.newTitle = title;
  this.image = image;
}

var albumArray = [];

function resetFields() {
  $("#artist-input").val("");
  $("#album-input").val("");
  $("#photo-input").val("");
}

// user interface//
$(document).ready(function() {
  $(".music-form").submit(function(event) {
    event.preventDefault();
    debugger;

    var title = $("#album-input").val();
    var artist = $("#artist-input").val();
    var image =  $("#photo-input").val();

    var newAlbum = new Album(artist, title, image);

    console.log(newAlbum);

    albumArray.push(newAlbum);
  })
})
