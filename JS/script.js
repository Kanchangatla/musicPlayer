var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(song.paused){
        song.onplay();
        icon.src = "";
    }
}