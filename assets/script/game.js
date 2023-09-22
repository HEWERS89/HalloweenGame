const questions = 
[
{
    question: "What is Sabrina's family name in Sabrina The Teenage  Witch",
    answers: [
    {text: 'Potionman', correct: false},
    {text: 'Broomman', correct:false},
    {text:'Spellman', correct:true},
    {text: 'Magicman', correct: false},
]
},

{
    question: 'What are Vampires not afraid of?',
     answers: [ 
        {text: 'Garlic', correct:false},
        {text:'Chocolate', correct:true},
        {text: 'Sunlight', correct:false},
        {text: 'Holywater', correct:false},
]
},

{
    question: 'Complete the name of this song,I put a ______ on you',
     answers: [ 
        {text: 'Potion', correct:true},
        {text: 'Spell', correct:false},
        {text: 'Pumpkin', correct:false},
        {text: 'Costume', correct:false},
]
},

{
    question: 'In which country did Halloween start?',
     answers: [ 
        {text: 'Brazil', correct:false},
        {text: 'India', correct:false},
        {text: 'Ireland', correct: true},
        {text: 'Germany', correct:false},
]
},


// {
//     question: 'The word Halloween means what?',
//      answers: [ 
//          'Scary Night', 'Reunion Day','Candy Day','Saints Evening'],
//          correct: 'Saints Evening'
// },

{
    question: 'The three Witches in Hocus Pocus are Winnie, Mary and...',
     answers: [ 
        {text: 'Sarah', correct:true},
        {text: 'Jamie', correct:false},
        {text: 'Daisy', correct: false},
        {text: 'Hannah', correct:false},
]
},

{
    question: 'Where do pumpkins grow?',
     answers: [ 
        {text: 'Vines', correct:true},
        {text: 'Hallophopb Stalks', correct:false},
        {text: 'Trees', correct: false},
        {text: 'Bushes', correct:false},
]
},

{
    question: 'Who wrote Frankenstein?',
     answers: [ 
        {text: 'Percy Shelly', correct:false},
        {text: 'Bram Stoker', correct:false},
        {text: 'Elizabeth Lunt', correct: false},
        {text: 'Mary Shelly', correct:true},
]
},

{
    question: 'Which animal among these are associated with Halloween',
     answers: [ 
        {text: 'White Rats', correct:false},
        {text: 'Brown Bears', correct:false},
        {text: 'Black Cats', correct: true},
        {text: 'Black Frogs', correct:false},
]
},

{
    question: 'According to Voodoo religion how many souls does each person have?',
     answers: [
        {text: 'One', correct:false,},
        {text: 'Three', correct:false},
        {text: 'Seven', correct: false},
        {text: 'Two', correct:true},
]
},
]

//login
const startButton = document.getElementById('start-btn')
const loginContainer=document.getElementById('login-continer')
const submitForm = document.getElementById('login-box')
// const playerName =document.getElementById('user-name')
//game
const gameContainer=document.getElementById('game-container')
const questionAreaElement = document.getElementById('question-area')
const questionElement =document.getElementById('question')
const answerButtonElement =document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')


let shuffleQuestions, currQuestionIndex, finalScore


//Start Game//
submitForm.addEventListener('submit', startGame);


//hide start button initiate game questions//
function startGame(e) {
    e.preventDefault(),
    console.log('Game Started'),
    startButton.classList.add('hide'),
    loginContainer.classList.add('hide'),
    gameContainer.classList.remove('hide'),
    shuffleQuestions = questions.sort(()=> Math.random() - .5),
    currQuestionIndex = 0,
    nextQuestion()
}


function playerName() {
    const userName= document.getElementById("user-name").value;
    localStorage.setItem("playerName", userName);
    window.location.href = "index.html";
    userName = localStorage.getItem("playerName");
    document.getElementById("login-input").innerHTML = userName;
}

function nextQuestion() {
    nextButton.classList.remove('hide');
    nextButton.addEventListener('click', nextQuestion);
    showQuestion(shuffleQuestions[currQuestionIndex])
  }
    
//function to display question
function showQuestion(questions){
  questionElement.innerText = questions.question;
  console.log(questions.answers);
  let answerOptions = questions.answers
  answerOptions.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonElement.appendChild(button);
  });
}

//function for user to select answers
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct === 'true');
    });
    if (shuffleQuestions.length > currQuestionIndex) {
      nextButton.classList.remove('hide');
    } else {
      resetButton.innerText = 'Reset';
      resetButton.classList.remove('hide');
    }
  }

  function resetQuestion() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct === true ) {
      element.classList.add('correct')}
      else (correct === false ); {
        element.classList.add('wrong')}
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  
  