const questions = [
    {
        question: "Quel est le plus grand océan de la Terre ?",
        answers: ["1) Océan Atlantique", "2) Océan Indien", "3) Océan Pacifique", "4) Océan Arctique"],
        correct: "3"
    },
    {
        question: "Combien de planètes y a-t-il dans notre système solaire ?",
        answers: ["1) 7", "2) 8", "3) 9", "4) 10"],
        correct: "2"
    },
    {
        question: "Quelle est la capitale de l’Australie ?",
        answers: ["1) Sydney", "2) Melbourne", "3) Canberra", "4) Perth"],
        correct: "3"
    },
    {
        question: "Quelle est l'année de fondation du groupe préféré de Gabriel ?",
        answers: ["1) 1962", "2) 1963", "3) 1964", "4) 1965"],
        correct: "3"
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

function startQuiz() {
    askQuestion(currentQuestion);
}

function askQuestion(index) {
    if (index >= questions.length) {
        if (correctAnswers === questions.length) {
            window.location.href = "index.html";
        } else {
            alert("Quiz terminé. Tu n’as pas répondu correctement à toutes les questions.");
        }
        return;
    }

    const questionObj = questions[index];
    const userAnswer = prompt(`${questionObj.question}\n\n${questionObj.answers.join("\n")}`);

    if (userAnswer === questionObj.correct) {
        alert("Bonne réponse !");
        correctAnswers++;
        currentQuestion++;
        askQuestion(currentQuestion); // Appelle la prochaine question
    } else {
        alert("Mauvaise réponse. Le quiz est terminé.");
    }
}
