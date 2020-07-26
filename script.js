let songs = ["music/hey.mp3", "music/summer.mp3", "music/ukulele.mp3"];
let title = ["hey.mp3", "summer.mp3", "ukulele.mp3"];
let poster = ["images/hey.jpg", "images/summer.jpg", "images/ukulele.jpg"];
let musicCover= document.querySelector(".musicCover")
let songTitle = document.getElementById("songTitle");
let fillBar = document.getElementById("fill");

let song = new Audio();
let currentSong = 0;

window.onload = playSong;

function playSong(){
            
    song.src = songs[currentSong];  //set the source of 0th song 
    
    songTitle.textContent = title[currentSong]; // set the title of song
    
    song.play();    // play the song
}

function playOrPauseSong(){
            
    if(song.paused){
        song.play();
       document.querySelector(".playicon").innerHTML=`<i class="fas fa-pause"></i>`
    }
    else{
        song.pause();
        document.querySelector(".playicon").innerHTML= `<i class="fas fa-play"></i>`
    }
}
song.addEventListener('timeupdate',function(){ 
            
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});

function next(){
            
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    document.getElementById("bg").style.background= `url(${poster[currentSong]})`;
    musicCover.children[0].setAttribute("src", poster[currentSong]);
    document.querySelector(".playicon").innerHTML=`<i class="fas fa-pause"></i>`
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    document.getElementById("bg").style.background= `url(${poster[currentSong]})`;
    musicCover.children[0].setAttribute("src", poster[currentSong]);
    document.querySelector(".playicon").innerHTML=`<i class="fas fa-pause"></i>`
}