console.log("Audio Javascript"); 
const soundbutton = document.querySelector('#play-sound-btn');
console.log(soundbutton);

//add event listener 
soundbutton.addEventListener('click', () => {
    console.log('Click works');
});
