const questions = [
    { question: "Quelle est mon année de naissance ?", options: ["1990", "1996", "2000", "1994"], correctAnswer: "1996" },
    { question: "Quel est mon film préféré ?", options: ["Inception", "Forrest Gump", "Gladiator", "Titanic"], correctAnswer: "Forrest Gump" },
    { question: "Quel est mon opus préféré de GTA ?", options: ["Vice City", "GTA V", "San Andreas", "GTA III"], correctAnswer: "San Andreas" },
    { question: "Quelle est l'année de fondation de mon groupe préféré ?", options: ["1962", "1963", "1964", "1965"], correctAnswer: "1964" }
];

let currentQuestion = 0;
const countdownDuration = 10;
let countdown;
let timeLeft;

const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");
const popupContainer = document.getElementById("popup-container");
const popupQuestion = document.getElementById("popup-question");
const popupOptions = document.getElementById("popup-options");

function startCountdown() {
    timeLeft = countdownDuration;
    timerDisplay.textContent = `Temps restant : ${timeLeft} secondes`;
    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Temps restant : ${timeLeft} secondes`;

        if (timeLeft < 0) {
            clearInterval(countdown);
            window.location.href = "mauvais.html";
        }
    }, 1000);
}

function showQuestion() {
    clearInterval(countdown);
    timerDisplay.textContent = "";
    resultDisplay.textContent = "";

    if (currentQuestion >= questions.length) {
        window.location.href = "index.html";
        return;
    }

    const questionObj = questions[currentQuestion];
    popupQuestion.textContent = questionObj.question;
    popupOptions.innerHTML = "";

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        popupOptions.appendChild(button);
    });

    popupContainer.style.display = "block";
    startCountdown();
}

function checkAnswer(selectedAnswer) {
    clearInterval(countdown);
    const questionObj = questions[currentQuestion];

    if (selectedAnswer === questionObj.correctAnswer) {
        resultDisplay.textContent = "Bonne réponse !";
        popupContainer.style.display = "none";
        currentQuestion++;
        showQuestion();
    } else {
        window.location.href = "mauvais.html";
    }
}

showQuestion();
