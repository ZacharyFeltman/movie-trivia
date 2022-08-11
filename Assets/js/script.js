var startButton = document.querySelector("#start-button");
var questionContainer = document.getElementById("question");
var containerBox = document.querySelector(".container");
var timerCount = document.querySelector("#timer-count");
var timeInterval = null;
var currentQuestionIndex = 0;
var timeLeft = 75;
var headerDiv = document.getElementById("header");
var answerBtns = document.querySelector(".answer-btns").children;
var answerOneBtn = document.querySelector("#answer1");
var answerTwoBtn = document.querySelector("#answer2");
var answerThreeBtn = document.querySelector("#answer3");
var answerFourBtn = document.querySelector("#answer4");

var questions = [
  {
	text: "How many Batman movies is Christian Bale in?",
	answers: [
	  { text: 3, correct: true },
	  { text: 5, correct: false },
	  { text: 1, correct: false },
	  { text: 0, correct: false },
	],
  },
  {
	text: "In what year did Pulp Fiction come out?",
	answers: [
	  { text: 2000, correct: false },
	  { text: 1994, correct: true },
	  { text: 1990, correct: false },
	  { text: 1985, correct: false },
	],
  },
  {
	text: "Who was the director of The Shining?",
	answers: [
	  { text: "David Lynch", correct: false },
	  { text: "Michael Bay", correct: false },
	  { text: "Stanley Kubrick", correct: true },
	  { text: "David Fincher", correct: false },
	],
  },
  {
	text: "Who is the lead actor in the Top Gun movies?",
	answers: [
	  { text: "Tom Cruise", correct: true },
	  { text: "Russel Crowe", correct: false },
	  { text: "Tom Hanks", correct: false },
	  { text: "Brad Pitt", correct: false },
	],
  },
];

var shuffledQuestions = [];


$(".answer-btn").css("color", "blue");
$("#header").children().css("color", "blue");

startButton.addEventListener("click", startGame);
answerOneBtn.addEventListener("click", function () {
	checkAnswer(0);
});
answerTwoBtn.addEventListener("click", function () {
	checkAnswer(1);
});
answerThreeBtn.addEventListener("click", function () {
	checkAnswer(2);
});
answerFourBtn.addEventListener("click", function () {
	checkAnswer(3);
});

function checkAnswer(index) {
	let currentQuestion = shuffledQuestions[currentQuestionIndex];
	console.log(currentQuestion);
	let currentAnswer = currentQuestion.answers[index];
	if (currentAnswer.correct) {
		alert("correct") 
	} else {
		alert("incorrect")
	}
}




function startGame() {
	shuffleQuestions();
	currentQuestionIndex = 0;
	showNextQuestion();
	
}

function shuffleQuestions() {
	shuffledQuestions = []
	let questionsCopy = [...questions]; 
	for (let i = 0; i < questions.length; i++) {
		let randomIndex = Math.floor(Math.random() * questionsCopy.length);
		let randomQuestion = questionsCopy.splice(randomIndex,1);
		shuffledQuestions.push(randomQuestion[0]);
	}
}

//setting allowed time for quiz
function countDownTimer() {
	timeLeft--;
  	timerCount.textContent = timeLeft;
  	if (timeLeft === 0) {
		clearInterval(timeInterval);
  	}
}

function showNextQuestion() {
	let currentQuestion = shuffledQuestions[currentQuestionIndex];
	questionContainer.textContent = currentQuestion.text;
	answerOneBtn.textContent = currentQuestion.answers[0].text;
	answerTwoBtn.textContent = currentQuestion.answers[1].text;
	answerThreeBtn.textContent = currentQuestion.answers[2].text;
	answerFourBtn.textContent = currentQuestion.answers[3].text;


}



function selectAnswer() {}
