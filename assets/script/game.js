/* jshint esversion:8 */

const questions = [
  {
    question: "What is Sabrina's family name in Sabrina The Teenage  Witch",
    answers: [
      { text: "Potionman", correct: false },
      { text: "Broomman", correct: false },
      { text: "Spellman", correct: true, },
      { text: "Magicman", correct: false },
    ],
  },

  {
    question: "What are Vampires not afraid of?",
    answers: [
      { text: "Garlic", correct: false },
      { text: "Chocolate", correct: true },
      { text: "Sunlight", correct: false },
      { text: "Holywater", correct: false },
    ],
  },

  {
    question: "Complete the name of this song,I put a ______ on you",
    answers: [
      { text: "Potion", correct: false },
      { text: "Spell", correct: true },
      { text: "Pumpkin", correct: false },
      { text: "Costume", correct: false },
    ],
  },

  {
    question: "In which country did Halloween start?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "India", correct: false },
      { text: "Ireland", correct: true },
      { text: "Germany", correct: false },
    ],
  },

  {
    question: "The word Halloween means what?",
    answers: [
      { text: "Scary Night", correct: false },
      { text: "Reunion Day", correct: false },
      { text: "Candy Day", correct: false },
      { text: "Saints Evening", correct: true },
    ],
  },

  {
    question: "The three Witches in Hocus Pocus are Winnie, Mary and...",
    answers: [
      { text: "Sarah", correct: true },
      { text: "Jamie", correct: false },
      { text: "Daisy", correct: false },
      { text: "Hannah", correct: false },
    ],
  },

  {
    question: "Where do pumpkins grow?",
    answers: [
      { text: "Vines", correct: true },
      { text: "Hallophopb Stalks", correct: false },
      { text: "Trees", correct: false },
      { text: "Bushes", correct: false },
    ],
  },

  {
    question: "Who wrote Frankenstein?",
    answers: [
      { text: "Percy Shelly", correct: false },
      { text: "Bram Stoker", correct: false },
      { text: "Elizabeth Lunt", correct: false },
      { text: "Mary Shelly", correct: true },
    ],
  },

  {
    question: "Which animal among these are associated with Halloween",
    answers: [
      { text: "White Rats", correct: false },
      { text: "Brown Bears", correct: false },
      { text: "Black Cats", correct: true },
      { text: "Black Frogs", correct: false },
    ],
  },

  {
    question:
      "According to Voodoo religion how many souls does each person have?",
    answers: [
      { text: "One", correct: false },
      { text: "Three", correct: false },
      { text: "Seven", correct: false },
      { text: "Two", correct: true },
    ],
  },
];

//login
const startButton = document.getElementById("start-btn");
const loginContainer = document.getElementById("login-container");
const submitForm = document.getElementById("login-box");

//game
const gameContainer = document.getElementById("game-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");
const currQuestionNumber = document.getElementById('current-question-number');

let userName;
let shuffleQuestions, currQuestionIndex;
let currentQuestionNumberDisplay= 0;
//Start Game//
submitForm.addEventListener("submit", startGame);

//hide start button initiate game questions//
function startGame(e) {
  e.preventDefault();
    console.log("Game Started");
    startButton.classList.add("hide");
    loginContainer.classList.add("hide");
    submitForm.classList.add("hide");
    gameContainer.classList.remove("hide");
    userName = document.getElementById('login-input').value;
    (shuffleQuestions = questions.sort(() => Math.random() - 0.5));
    (currQuestionIndex = 0);
    nextQuestion();
}

function setPlayer(userName){
  localStorage.setItem('player',userName );
  userName.innerText= player.gameContainer
}
console.log(userName)

//function to display question
function showQuestion(questions) {
  questionElement.innerText = questions.question;
  console.log(questions.answers);
  let answerOptions = questions.answers;
  answerOptions.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

//function for user to select answers
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");{
      button.classList.add("correct");
    }
    button.disabled =true;
  }); 
  if (currQuestionIndex + 1 <= shuffleQuestions.length) {
    nextButton.classList.remove("hide");
  }else{
    resetButton.innerText = "Reset";
    resetButton.classList.remove("hide");
  }
}

//display next question
function nextQuestion() {
  resetQuestion();
  showQuestion(shuffleQuestions[currQuestionIndex]);
  currQuestionIndex++;
  currentQuestionNumberDisplay++;
  currQuestionNumber.innerText = currentQuestionNumberDisplay;
}

//Get nreset question
function resetQuestion() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
  nextButton.addEventListener("click", nextQuestion);
  resetButton.addEventListener('click', resetGame);

  //Restart Game
  function resetGame(){
    currentQuestionNumberDisplay=0;
    startButton.classList.remove("hide");
    loginContainer.classList.remove("hide");
    submitForm.classList.remove("hide");
    gameContainer.classList.add("hide");
  }
//function to set right and wrong questions link with CSS 
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === true) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}


