class Song{
    constructor(name, about, yearReleased, artist, url){
        this.name = name;
        this.about = about;
        this.yearReleased = yearReleased;
        this.artist = artist;
        this.url = url;
    }
}

const form = document.querySelector('.song-input');
const display = document.querySelector('.display');

(function eventListeners(){
    let event = document.querySelector('#submit').addEventListener('click', function(event) { //(event) passes that variable into function
        event.preventDefault() //so the event stays on page
        new UI().getInput()}); //fires the class which fires function
})();

class UI {
    getInput = function(){
        let song = new Song(document.getElementsByClassName("song-name")[0].value, //CALLING SONG
        document.getElementsByClassName("song-about")[0].value, //use the [] cause you're dumb dumb stupid
        document.getElementsByClassName("year-released")[0].value, 
        document.getElementsByClassName("song-artist")[0].value, 
        document.getElementsByClassName("artist-img")[0].value)
    
        document.querySelector('.display').insertAdjacentHTML('afterbegin', `<div class="display-song"><div class="display-song-name">${song.name}</div><div class="display-song-about">${song.about}</div><div class="display-year-released">${song.yearReleased}</div><div class="display-song-artist">${song.artist}</div><div class="display-url"><img src="${song.url}" alt="song"></div><div class="remove-song">Remove Song &#10006; </div></div>`) //back ticks so dollar sign can be used, dollar sign is value of the song variable
    
        document.getElementsByClassName("song-name")[0].value=""; 
        document.getElementsByClassName("song-about")[0].value="";
        document.getElementsByClassName("year-released")[0].value="";
        document.getElementsByClassName("song-artist")[0].value="";
        document.getElementsByClassName("artist-img")[0].value="";
        //make all strings equal nothing after pushing html
    
        document.querySelector('.remove-song').addEventListener('click', function(event) {
            //console.log('working')
            event.target.parentElement.remove();
        }) //selecting the remove-song class, listening for a click, then getting rid of the parentElement
    } 
}
