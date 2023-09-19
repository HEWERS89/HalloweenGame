const questions = 
[
{
    question: "What is Sabrina's family name in Sabrina The Teenage  Witch",
    answer: [
    {text: 'Potionman', correct: false},
    {text: 'Broomman', correct:false},
    {text:'Spellman', correct:true},
    {text: 'Magicman', correct: false},
]
},

{
    question: 'What are Vampires not afraid of?',
     answer: [ 
        {text: 'Garlic', correct:false},
        {text:'Chocolate', correct:true},
        {text: 'Sunlight', correct:false},
        {text: 'Holywater', correct:false},
]
},

{
    question: 'Complete the name of this song,I put a ______ on you',
     answer: [ 
        {text: 'Potion', correct:true},
        {text: 'Spell', correct:false},
        {text: 'Pumpkin', correct:false},
        {text: 'Costume', correct:false},
]
},

{
    question: 'In which country did Halloween start?',
     answer: [ 
        {text: 'Brazil', correct:false},
        {text: 'India', correct:false},
        {text: 'Ireland', correct: true},
        {text: 'Germany', correct:false},
]
},

{
    question: 'The word Halloween means what?',
     answer: [ 
        {text: 'Scary Night', correct:false},
        {text: 'Reunion Day', correct:false},
        {text: 'Candy Day', correct: false},
        {text: 'Saints Evening', correct:true},
]
},

{
    question: 'The three Witches in Hocus Pocus are Winnie, Mary and...',
     answer: [ 
        {text: 'Sarah', correct:true},
        {text: 'Jamie', correct:false},
        {text: 'Daisy', correct: false},
        {text: 'Hannah', correct:false},
]
},

{
    question: 'Where do pumpkins grow?',
     answer: [ 
        {text: 'Vines', correct:true},
        {text: 'Hallophopb Stalks', correct:false},
        {text: 'Trees', correct: false},
        {text: 'Bushes', correct:false},
]
},

{
    question: 'Who wrote Frankenstein?',
     answer: [ 
        {text: 'Percy Shelly', correct:false},
        {text: 'Bram Stoker', correct:false},
        {text: 'Elizabeth Lunt', correct: false},
        {text: 'Mary Shelly', correct:true},
]
},

{
    question: 'Which animal among these are associated with Halloween',
     answer: [ 
        {text: 'White Rats', correct:false},
        {text: 'Brown Bears', correct:false},
        {text: 'Black Cats', correct: true},
        {text: 'Black Frogs', correct:false},
]
},

{
    question: 'According to Voodoo religion how many souls does each person have?'
     answer: [ 
        {text: 'One', correct:false},
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
//game
const gameContainer=document.getElementById('game-container')
const questionAreaElement = document.getElementById('question-area')
const questionELement =document.getElementById('question')
const answerButtons =document.getElementById('answers-area')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')

let shuffledQuestions, currentQuestionIndex, userName



submitForm.addEventListener('submit', startGame)
// startButton.addEventListener('click', startGame)

//hide start button initiate game|questions//
function startGame(e) {
    e.preventDefault()
    console.log('Game Started')
    startButton.classList.add('hide'),
    questionAreaElement.classList.remove('hide'),
    loginContainer.classList.add('hide')
    gameContainer.classList.remove('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    NextQuestion()
}



//Get players name//
function playerName(e){

}


function finalScore(){

}



function NextQuestion(){
revealQuestion(shuffledQuestions[currentQuestionIndex])
}


function selectAnswer(){
}



