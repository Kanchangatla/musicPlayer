var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "../musicPlayer/Images/play.png";
    } else {
        song.pause();
        icon.src = "../musicPlayer/Images/pause.png";
    }
}