
let randomNumber = Math.floor(Math.random() * 100) + 1; // Véletlenszerű szám generálása 1 és 100 között
let attempts = 0;

// A bevitel figyelése és a gomb engedélyezése/tiltása
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const newGameBtn = document.getElementById('newGameBtn');
const gameTitle = document.getElementById('gameTitle');
const gameDescription = document.getElementById('gameDescription');

// Ürítse ki a mezőt, amikor a felhasználó rákattint, ha nem üres
guessInput.addEventListener('focus', function() {
    if (guessInput.value.trim() !== "") {
        guessInput.value = ""; // Mező kiürítése
        submitGuess.disabled = true; // Gomb tiltása, mert a mező most üres
    }
});

// Ha van bevitel, engedélyezzük a gombot
guessInput.addEventListener('input', function() {
    if (guessInput.value.trim() === "") {
        submitGuess.disabled = true; // Gomb tiltása, ha üres a mező
    } else {
        submitGuess.disabled = false; // Gomb engedélyezése, ha van bevitel
    }
});

// Játék logikája
document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    // Az üzenet és osztály frissítése az alert boxban
    const alertBox = document.getElementById("alert");
    const alertMessage = document.querySelector(".alertMessage");

    // Az első próbálkozáskor megjelenítjük az alert boxot
    alertBox.classList.remove("d-none");

    if (userGuess === randomNumber) {
        // Ha eltalálta a számot
        alertBox.className = "alert alert-success";
        alertMessage.innerHTML = `<strong>Gratulálok!</strong> Eltaláltad a számot! A gondolt szám: ${randomNumber}. Próbálkozásaid száma: ${attempts}`;
        
        // Cím és leírás szöveg megváltoztatása
        gameTitle.textContent = "Tetszett a játék?";
        gameDescription.textContent = "Ha igen, próbáld ki újra!";

        // Szövegmező és Tipp gomb elrejtése, Új játék gomb megjelenítése
        guessInput.classList.add("d-none");
        submitGuess.classList.add("d-none");
        newGameBtn.classList.remove("d-none");

    } else if (userGuess < randomNumber) {
        // Ha a tipp túl alacsony
        alertBox.className = "alert alert-warning";
        alertMessage.innerHTML = `<strong>Nem jó!</strong> A gondolt szám nagyobb, mint ${userGuess}. Próbálkozz újra!`;
    } else {
        // Ha a tipp túl magas
        alertBox.className = "alert alert-danger";
        alertMessage.innerHTML = `<strong>Nem jó!</strong> A gondolt szám kisebb, mint ${userGuess}. Próbálkozz újra!`;
    }
});

// Új játék gomb esemény, oldal frissítése
newGameBtn.addEventListener('click', function() {
    window.location.reload(); // Oldal újratöltése
});
