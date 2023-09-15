const startButton = document.getElementById ('start-btn')
const questionAreaElement = document.getElementById ('question-area')

let 
shuffledQuestions,
currentQuestionIndex




startButton.addEventListener('click',startGame)

//hide start button initiate game|questions//
function startGame() {
    console.log('Game Started')
    startButton.classList.add('hide'),
    questionAreaElement.classList.remove('hide'),
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