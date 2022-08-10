var startButton = document.querySelector(".start-button")
var questionsContainer = document.querySelector(".questions")
var questions = []

startButton.addEventListener("click", startGame)


function startGame() {
nextQuestions()
}

function nextQuestions() {

}

var questions = [
    {
        question: "How many Batman movies is Christian Bale in?",
        answers: [
           {text: 3, correct: true},
           {text: 5, correct: false},
           {text: 1, correct: false},
           {text: 0, correct: false},
        ]
    },
    {
        question: "In what year did Pulp Fiction come out?",
        answers: [
            {text: 2000, correct: false},
            {text: 1994, correct: true},
            {text: 1990, correct: false},
            {text: 1985, correct: false},
        ]
    },
    {
        question: "Who was the director of The Shining?",
        answers: [
            {text: "David Lynch", correct: false},
            {text: "Michael Bay", correct: false},
            {text: "Stanley Kubrick", correct: true},
            {text: "David Fincher", correct:false},
        ]
    },
    {
        questions: "Who is the lead actor in the Top Gun movies?",
        answers: [
            {text: "Tom Cruise", correct: true},
            {text: "Russel Crowe", correc: false},
            {text: "Tom Hanks", correct: false},
            {text: "Brad Pitt", correct: false},
        ]
    }
]

function selectAnswer() {

}