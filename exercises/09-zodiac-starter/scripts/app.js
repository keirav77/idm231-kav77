console.log('Week 09: Zodiac Starter loaded!');

// =============================================================================
// Problem 1: Remember the Birthday
// =============================================================================
// Steps:
// 1. Select the form, input, output, and badge elements
// 2. On page load, check localStorage for a saved birthday
//    - If found, pre-fill the input and show the storage badge
// 3. On form submit, parse the date, get the sign, save to localStorage,
//    and show the sign in the output

const rememberForm = document.querySelector('#remember-form');
//localStorage.setItem('savedBirthday', '2026-03-03'); 
const birthday2Input = document.querySelector('#birthday2');
const rememberOutput = document.querySelector('#remember-output');
const storageBadge = document.querySelector('#storage-badge');
// const date= new Date(birthday2Input.value);

// const month = date.getMonth() + 1;
// const day = date.getDate();
// const sign = getZodiacSign(month, day);
// localStorage.setItem('savedBirthday', birthday2Input.value);
// const saved = localStorage.getItem('savedBirthday');
// if (saved) {
//   birthday2Input.value = saved;
//   storageBadge.style.display = 'block';
// }
 

// // TODO: On page load, check localStorage for 'savedBirthday'
// // If it exists, pre-fill birthday2Input.value and show the storageBadge
// const savedBirthday = localStorage.getItem('savedBirthday');
// if (savedBirthday) {
//   birthday2Input.value = savedBirthday;
//   storageBadge.style.display = 'block';
// }


rememberForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Get the date value
  
const date= birthday2Input.value;
console.log(date);
localStorage.setItem('savedBirthday', date);
  // TODO: Parse month and day
//   const [year, month, day] = dateValue.split('-').map(Number);

  // TODO: Call getZodiacSign(month, day)
//   const sign = getZodiacSign(month, day);

  // TODO: Save the birthday to localStorage
  // localStorage.setItem('savedBirthday', dateValue);

  // TODO: Show the sign in rememberOutput
});
.value = localStorage.getItem('savedBirthday');



// =============================================================================
// Problem 2: setTimeout — Delayed Alert
// =============================================================================
// Steps:
// 1. Select the form and date input
// 2. Listen for submit — parse the date, get the zodiac sign
// 3. Use setTimeout to fire an alert() showing the sign after 5 seconds
// Bonus: use clearTimeout so re-submits don't stack multiple alerts

const timerForm = document.querySelector('#timer-form');
const birthday3Input = document.querySelector('#birthday3');

// Declare the timer variable outside so clearTimeout can reach it
let signTimer;

timerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Get the date value
  const dateValue = '';

  // TODO: Parse month and day

  // TODO: Call getZodiacSign(month, day)

  // TODO: Cancel any existing timer, then start a new one that alerts after 5s
  // clearTimeout(signTimer);
  // signTimer = setTimeout(() => {
  //   alert(`Your sign is ${sign}!`);
  // }, 5000);
});


// =============================================================================
// Problem 3: Find the Zodiac Sign
// =============================================================================
// Steps:
// 1. Select the form, input, and output elements
// 2. Listen for the form's submit event
// 3. Parse month and day from the date input
// 4. Call getZodiacSign(month, day) to get the sign
// 5. Display the sign in the output div

const zodiacForm = document.querySelector('#zodiac-form');
const birthdayInput = document.querySelector('#birthday');
const zodiacOutput = document.querySelector('#zodiac-output');
const zodiacSuccess = document.querySelector('#zodiac-success');

zodiacForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Get the date value from birthdayInput.value
  const dateValue = '';

  // TODO: Convert it to a Date object
  // const date = new Date(dateValue);

  // TODO: Get month (add 1!) and day
  // const month = ...
  // const day = ...

  // TODO: Call the zodiac formula
  // const sign = getZodiacSign(month, day);

  // TODO: Show the result in zodiacOutput
  // zodiacOutput.textContent = ...

  // TODO: (optional) Show the success div with the sign
  // zodiacSuccess.style.display = 'block';
  // zodiacSuccess.innerHTML = ...
});


// =============================================================================
// Zodiac Formula — provided for you! Just call getZodiacSign(month, day)
// Returns the zodiac sign as a string (e.g. "Aries", "Scorpio")
// =============================================================================
function getZodiacSign(month, day) {
  let sign = '';

  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    sign = 'Capricorn';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    sign = 'Sagittarius';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    sign = 'Scorpio';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    sign = 'Libra';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    sign = 'Virgo';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    sign = 'Leo';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    sign = 'Cancer';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    sign = 'Gemini';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    sign = 'Taurus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    sign = 'Aries';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    sign = 'Pisces';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    sign = 'Aquarius';
  }

  return sign;
}


console.log('Ready! Complete all three problems and test your work.');
