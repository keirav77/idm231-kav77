console.log('JavaScript is working!');

const alertBtn = document.querySelector('#alert-btn');
alertBtn.addEventListener('click', function() {
  alert('Hello from JavaScript!');
});
const hoverBox = document.querySelector('#double-box');
const CountDisplay = document.querySelector('#double-count');
let doubleClickCount = 0;
hoverBox.addEventListener('dblclick', function() {
    doubleClickCount++;
    CountDisplay.textContent = `Double Click Count: ${doubleClickCount}`;
});
const textInput = document.querySelector('#char-input');
const charDisplay = document.querySelector('#char-output');
textInput.addEventListener('input', function() {
    const length = textInput.value.length;
    charDisplay.textContent = `${length} characters`;
});
const toggleBtn = document.querySelector('#toggle-btn');
const toggleBox = document.querySelector('#toggle-text');
toggleBtn.addEventListener('click', function() {
    if (toggleBox.style.display === 'none') {
        toggleBox.style.display = 'block';
        toggleBtn.textContent = 'Hide Text';
    } else {
        toggleBox.style.display = 'none';
        toggleBtn.textContent = 'Show Text';
    }
});
const numberInput = document.querySelector('#number-input');
const notification = document.querySelector('#valid-notification');
numberInput.addEventListener('blur', function() {
    const value = parseInt(numberInput.value);
    if (value >= 1 && value <= 100) {
        notification.style.display = 'block';
    } else {
        notification.style.display = 'none';
    }
});