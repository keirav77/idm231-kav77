const form = document.querySelector(".js-zodiac-form");
const nameInput = document.querySelector(".js-name-input");
nameInput.addEventListener("input", () => {
  localStorage.setItem("name", nameInput.value);
});
const birthdayInput = document.querySelector(".js-date-input");

const resultBox = document.querySelector(".js-form-result");
const resultText = document.querySelector(".js-result-text");
const resultBio = document.querySelector(".js-result-bio");

const buttons = document.querySelectorAll(".js-sign-button");
const audio = document.querySelector(".js-audio-player");

// DATA
const ZODIAC_DATA = {
  aries: { name: "Aries", player: "Jalen Carter", sound: "assets/sounds/aries.mp3",
bio:"The aries sign are characterized by being energetic, ambitious, confident, and at times impulsive. Jalen Carter’s birthday is on April 4th. Jalen Carter is a classic Aries sign because he is confident, energetic, and at times impulsive (if you can remember opening day against the cowboys in 2025)."
   },

  taurus: { name: "Taurus", player: "Lane Johnson", sound: "assets/sounds/taurus.mp3",
bio:"The Taurus are known for their stability, comfort, and loyalty, often exhibiting a patient and stubborn nature.  Lane Johnson’s birthday is on May 8th. Lane Johnson is as dependable as it comes, and despite his intense position he is seen is calm and stabble."
   },

  gemini: { name: "Gemini", player: "Fred Johnson", sound: "assets/sounds/gemini.mp3",
bio:"They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see. His birthday June 5th."
   },

  cancer: { name: "Cancer", player: "A.J. Brown", sound: "assets/sounds/cancer.mp3", 
bio:"Cancers are kind and emotional people. They are loyal and sensitive. Aj Brown’s birthday is June 30th and he truly embodies what a cancer is. He has spoken about the importance of advocating for mental health, and you can see how much he cares for every player. "
  },

  leo: { name: "Leo", player: "Jalen Hurts", sound: "assets/sounds/leo.mp3",
bio:"Leos are known for being natural leaders, dramatic, creative, and confident, often commanding the spotlight. They are fiercely loyal, generous. Jalen Hurt’s birthday is on August 7th, and he is a natural leo. Being the starting quarterback of the Eagles, he is an incredibly confident and is a natural born leader"
   },

  virgo: { name: "Virgo", player: "Will Shipley", sound: "assets/sounds/virgo.mp3",
    bio:"The virgo re diligent perfectionists who thrive on organization and service, often acting as helpful, reliable, and intelligent problem-solvers in their personal and professional lives. Will Shipley’s birthday is on August 29th, and he is often describe as intelligent, competitive, and driven."
  },

  libra: { name: "Libra", player: "Landon Dickerson", sound: "assets/sounds/libra.mp3", 
bio:"The Libra Known for being diplomatic, charming, and artistic, they excel in partnerships. They also thrive in social settings and acting as “the glue” in friendships. If you’ve ever seen clips of Landon Dickerson outside of football you will see that fun loving and social person.  His birthday is September 30th."
  },

  scorpio: { name: "Scorpio", player: "DeVonta Smith", sound: "assets/sounds/scorpio.mp3", 
bio:"The Scorpio sign is intense, passionate, magnetic, and mysterious nature. As a fixed sign, they are tenacious, loyal, and deep. Devonta Smith’s birthday is on November 14th. Devonta smith is a humorous personality, but as a player he is fiery and sharp. He is an incredibly talented Wide Receiver, with a Heissman trophy win in 2021."
  },

  sagittarius: { name: "Sagittarius", player: "Darius Cooper", sound: "assets/sounds/sagittarius.mp3", 
bio:"The Sagittarius is known for being adventurous, optimistic, honest, and freedom-loving. They are often characterized as truth-seekers and intellectual explorers. They are also enthusiastic and have infectious energy. Darius Coopers birthday is on November 22. He is described as mature and hard-working since he was a free agent."
  },

  capricorn: { name: "Capricorn", player: "Dallas Goedert", sound: "assets/sounds/capricorn.mp3",
bio:"These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time.  Dallas Goedert’s birthday is January 3rd."

   },
  aquarius: { name: "Aquarius", player: "Saquon Barkley", sound: "assets/sounds/aquarius.mp3", 
bio:"The Aquarius are a unique sign. They are highly independent, eccentric, and forward-thinking, but can also be emotionally detached, rebellious, and stubborn. Saquon Barkley’s birthday is on February 9th, which was also the day of the Super Bowl in 2025! (He also shares a birthday with Cooper Dejean!) Although Saquon is an Aquarius sign his personality is a little different because he is characterized as humble, driven, and often serves as a mentor for younger players."

  },
  pisces: { name: "Pisces", player: "Reed Blankenship", sound: "assets/sounds/pisces.mp3", 
bio:"Pisces are known to be empathetic, creative, laidback, flexible/openminded. They are extremely generous  and make others a priority. Reed Blankenship’s birthday is March 2nd so he is a Pisces. Fellow Eagles’ teammates describe Reed as high-energy, reliable, and a great leader."

  }
};

// FUNCTION
function getZodiacSign(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "pisces";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return "libra";
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return "scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "sagittarius";
}

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const dateValue = birthdayInput.value;

  if (!nameValue || !dateValue) {
    alert("Please fill everything out");
    return;
  }

  const date = new Date(dateValue);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const sign = getZodiacSign(month, day);
  const signData = ZODIAC_DATA[sign];

  resultText.innerText = `Hi ${nameValue}, you are a ${signData.name} → ${signData.player}`;
  resultBio.innerText = signData.bio;
  resultBox.classList.remove("hidden");

  audio.src = signData.sound;
  audio.play();

});
const resultImage = document.querySelector(".js-result-image");


// BUTTON CLICKS
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const signName = button.dataset.sign;
    const signData = ZODIAC_DATA[signName];

    resultText.innerText = `You clicked ${signData.name} → ${signData.player}`;
    
    resultBox.classList.remove("hidden");

    audio.src = signData.sound;
    audio.play();
  });
});

// CLEAR STORAGE
document.querySelector(".js-clear-storage").addEventListener("click", () => {
  localStorage.clear();
  nameInput.value = "";
});



const helpButton = document.querySelector(".js-help-button");
const helpModal = document.querySelector(".js-help-modal");
const helpClose = document.querySelector(".js-help-close");

// OPEN MODAL
helpButton.addEventListener("click", () => {
  helpModal.classList.remove("hidden");
});

// CLOSE MODAL (X button)
helpClose.addEventListener("click", () => {
  helpModal.classList.add("hidden");
});

// CLOSE MODAL (click outside the box)
helpModal.addEventListener("click", (e) => {
  if (e.target === helpModal) {
    helpModal.classList.add("hidden");
  }
});


const resultClose = document.querySelector(".js-result-close");
// CLOSE RESULT MODAL
resultClose.addEventListener("click", () => {
  resultBox.classList.add("hidden");
});

// CLOSE when clicking outside
resultBox.addEventListener("click", (e) => {
  if (e.target === resultBox) {
    resultBox.classList.add("hidden");
  }
});
window.addEventListener("load", () => {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    nameInput.value = savedName;
  }
});