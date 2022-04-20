let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create a audio Element
let track = document.createElement('audio');


// All songs list
let All_song = [
    {
        name:"Betterdays",
        path:"music/bensound-betterdays.mp3",
        img: "img/img1.jpg",
        singer:"Benjamin Tissot"
    },
    {
        name: "Sunny",
        path: "music/bensound-sunny.mp3",
        img: "img/img2.jpg",
        singer: "Benjamin Tissot"
    },
    {
        name: "Ukulele",
        path: "music/bensound-ukulele.mp3",
        img: "img/img3.jpg",
        singer: "Benjamin Tissot"
    }
];
// All function

//function load the track
function load_track(index_no){
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);

//checking the song is playing or not
function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

//play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

//pause song
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

//next song
function next_song(){
    if (index_no < All_song.length - 1){
                index_no += 1;
                load_track(index_no);
                playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}

//previous song
function previous_song(){
    if (index_no > 0){
                index_no -= 1;
                load_track(index_no);
                playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();

    }
}