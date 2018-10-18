// var firebase = require("firebase");

var request = new XMLHttpRequest();
request.open("GET", "./music.xml", false);
request.send();
var xml = request.responseXML;
var songs = xml.getElementsByTagName("music");
var songsUpdated = [];
for(var i = 0; i < songs.length; i++) {
    var song = songs[i];
    var songId = song.getElementsByTagName("id");
    var songTitle = song.getElementsByTagName("title");
    var songArtist = song.getElementsByTagName("artist");
    var songDuration = song.getElementsByTagName("duration");
    var songThumb = song.getElementsByTagName("thumb_url");
    var list = document.createElement('div');

    for(var j = 0; j < songTitle.length; j++) {

      var listItem = document.createElement('div');
      listItem.className = "col-sm-6 col-md-3 col-xs-12 text-center product-column";
      var productContainer = document.createElement('div');

      var songInfo = document.createElement('p');
      var img = document.createElement('img');
      img.src = songThumb[j].childNodes[0].nodeValue;

      songInfo.innerHTML = '#' + songId[j].childNodes[0].nodeValue + ' ' + songTitle[j].childNodes[0].nodeValue+ ' [<em>' + songDuration[j].childNodes[0].nodeValue + '</em>]' + '<br><strong>' + songArtist[j].childNodes[0].nodeValue + '</strong>';
      listItem.appendChild(img);
      listItem.appendChild(songInfo);
      list.appendChild(listItem);
    }
}

document.getElementById("app").appendChild(list);
