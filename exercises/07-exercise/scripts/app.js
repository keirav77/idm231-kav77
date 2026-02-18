const hoverSound = new Audio('sounds/hover.mp3');
console.log('Hover sound', hoverSound);
const hvrBtn = document.querySelector('#hover-btn');
const hoverStatus = document.querySelector('#hover-status');


    hvrBtn.addEventListener('mouseenter', () => {
        hoverSound.play();
        hoverStatus.textContent = 'Hovering over the button!';
    });

const volumeSlider = document.querySelector('#volume-slider');
const volumeStatus = document.querySelector('#volume-status');
