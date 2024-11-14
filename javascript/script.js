const questions = [
    { question: "Quelle est mon année de naissance ?", options: ["1990", "1996", "2000", "1994"], correctAnswer: "2" },
    { question: "Quel est mon film préféré ?", options: ["Inception", "Forrest Gump", "Gladiator", "Titanic"], correctAnswer: "2" },
    { question: "Quel est mon opus préféré de GTA ?", options: ["Vice City", "GTA V", "San Andreas", "GTA III"], correctAnswer: "3" },
    { question: "Quelle est l'année de fondation de mon groupe préféré ?", options: ["1962", "1963", "1964", "1965"], correctAnswer: "3" }
];

let currentQuestion = 0;
const countdownDuration = 10;
let countdown;
let timeLeft;

function startCountdown() {
    timeLeft = countdownDuration;
    countdown = setInterval(() => {
        console.log(`Temps restant : ${timeLeft} secondes`);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            alert("Temps écoulé ! Le quiz est terminé.");
            currentQuestion = questions.length; 
        }
    }, 1000);
}

function askQuestion() {
    if (currentQuestion >= questions.length) {
        window.location.href = "index.html";
        return;
    }

    const questionObj = questions[currentQuestion];
    const formattedQuestion = `${questionObj.question}\n\n` +
        questionObj.options.map((option, index) => `${index + 1}) ${option}`).join("\n");

    startCountdown();

    const userAnswer = prompt(formattedQuestion);
    clearInterval(countdown);

    if (timeLeft >= 0 && userAnswer === questionObj.correctAnswer) {
        currentQuestion++;
        askQuestion();
    } else if (userAnswer !== questionObj.correctAnswer && userAnswer !== null) {
        alert("Mauvaise réponse ! Le quiz est terminé.");
    }
}

askQuestion();
