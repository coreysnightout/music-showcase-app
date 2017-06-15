//back-end//
function Album(artist, title, image) {
  this.artist = artist;
  this.newTitle = title;
  this.image = image;
}

var albumArray = [];



$(document).ready(function() {
  $(".music-form").submit(function(event) { debugger;
    event.preventDefault();

    var title = $("#album-input").val();
    var artist = $("#artist-input").val();
    var image =  $("#photo-input").val();

    var newAlbum = new Album(artist, title, image);

    $(".main").empty();

    albumArray.pop(0);
    albumArray.push(newAlbum);

    $('ul').append('<li><div class="title-text"><h3>' + artist + '</h3><h3>' + title + '</h3></div><img src="' + image + '" alt="">' + '</li>');
    //
    // $(".main").append("<li>" + artist + "<br>" + title + "<br>" + '<img src="' + image + '" alt="">' + "</li>");

  });
});
