<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IDM231</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>What Eagles Player you are based off your birthday!</h1>
    <h2> Enter your birthday here:</h2>
    <input type="date" id="birthday" name="birthday">
    <button id="submit">Submit</button>

    <section class="result-card" id="resultCard" aria-live="polite">
        <img id="playerImage" src="" alt="" class="player-image hidden">
        <p id="zodiacResult" class="zodiac-result"></p>
    </section>

    <script src="app.js"></script>
</body>
</html>


h1 {
    font-family: var(--font-main), sans-serif;
    color: var(--primary-color);
    text-align: center;
    margin-top: 50px;
    background-color: #000000;
    padding: 1rem;
}

#birthday,
#submit {
    font: inherit;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #000000;
    margin: 0.5rem;
}

#submit {
    background-color: var(--primary-color);
    color: #ffffff;
    cursor: pointer;
}

.result-card {
    max-width: 700px;
    margin: 2rem auto 0;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.92);
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
    display: none;
}

.result-card.visible {
    display: block;
}

.player-image {
    width: min(100%, 320px);
    height: auto;
    margin: 0 auto 1rem;
    border-radius: 10px;
    display: block;
}

.hidden {
    display: none;
}

.zodiac-result {
    font-size: 1.1rem;
    line-height: 1.6;
}

.background-container {
    display: none;
}
#name {
    font: inherit;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #000000;
    margin: 0.5rem;
}#zodiac-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 30px;
}

.sign {
    background: white;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid black;
    transition: 0.2s;
}

.sign:hover {
    background: var(--primary-color);
    color: white;
}