
const soundbutton = document.querySelector('#play-sound-btn');


//add event listener 
soundbutton.addEventListener('click', () => {

    const audioClip = new Audio('sounds/sound_1.mp3');
    audioClip.play();
console.log('Sound played');
});  

const soundbutton1 = document.querySelector('#sound-1');
const soundbutton2 = document.querySelector('#sound-2');
const soundbutton3 = document.querySelector('#sound-3');

const sound1 = new Audio('sounds/sound_1.mp3');
const sound2 = new Audio('sounds/sound_2.mp3');
const sound3 = new Audio('sounds/sound_3.mp3');

soundbutton.addEventListener('click', () => {

    const audioClip = new Audio('sounds/sound_1.mp3');
    audioClip.play();
console.log('Sound played');
}); 
 soundbutton1.addEventListener('click', () => {
    sound1.play();
    console.log('Sound 1 played');
}); 
 soundbutton2.addEventListener('click', () => {
    sound2.play();
    console.log('Sound 2 played');
}); 
 soundbutton3.addEventListener('click', () => {
    sound3.play();
    console.log('Sound 3 played');
});