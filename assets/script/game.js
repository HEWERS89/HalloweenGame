const startButton = document.getElementById('start-btn')
const questionAreaElement = document.getElementById('question-area')
const loginContainer=document.getElementById("login-continer")
const gameContainer=document.getElementById("game-container")
const submitForm = document.getElementById("login-box")


let 
shuffledQuestions,
currentQuestionIndex,
userName



submitForm.addEventListener('submit', startGame)
// startButton.addEventListener('click', startGame)

//hide start button initiate game|questions//
function startGame() {
    console.log('Game Started')
    // startButton.classList.add('hide'),
    // questionAreaElement.classList.remove('hide'),
    loginContainer.classList.add("hide")
    gameContainer.classList.remove("hide")
    NextQuestion()
}



//Get players name//
function playerName(){

}


function score(){

}



function NextQuestion(){
}


function selectAnswer(){
}



const questions = [
    {
        question: 'what is 1+1',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false},
        ]
    }
]