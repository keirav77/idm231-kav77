const birthdayInput = document.getElementById("birthday");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
    const birthdayValue = birthdayInput.value;
    console.log("Birthday entered:", birthdayValue); // Debugging line
    if (!birthdayValue) {
        alert("Please enter your birthday.");
        return;
    }
    const date = new Date(birthdayValue);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let matchedPlayer;

    //capricorn
   if((month===12 && day >=22) || (month===1 && day<=19)) {
        matchedPlayer={ 
            name: "Dallas Goedert, and The Capricorn",
            bio:"These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. Dallas Goederts birthday is January 3rd."
        };
    }
   //Aquarius

   else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        matchedPlayer = {
            name: "Saquon Barkley",
            bio: "The Aquarius are a unique sign. They are highly independent, eccentric, and forward-thinking, but can also be emotionally detached, rebellious, and stubborn. Saquon Barkley’s birthday is on February 9th, which was also the day of the Super Bowl in 2025! (He also shares a birthday with Cooper Dejean!) Although Saquon is an Aquarius sign his personality is a little different because he is characterized as humble, driven, and often serves as a mentor for younger players."
        };
    }

    document.getElementById("zodiacResult").innerText = 
    matchedPlayer.name + ": " + matchedPlayer.bio;
});