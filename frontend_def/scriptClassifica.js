// https://opentdb.com/api.php?amount=10

// code 429 to many request


const _question = document.getElementById('question')
const _option = document.querySelector('.quiz-options')
const _buttonSend = document.querySelector('.quiz-button-send')
const _correctStore = document.getElementById('correct-store');
const _totalQuestion = document.getElementById('total-question');

let correctAnswer = 0, correctStore = 1, totalQuestion = 3;

document.addEventListener('DOMContentLoaded' , () => {
    loadClassifica();
    
})


async function loadClassifica() {
    
    /*
    visualizza la classifica
    // all category
    //const APIUrl = 'https://opentdb.com/api.php?amount=1'
    // only category computer science 18
    const APIUrl = 'https://opentdb.com/api.php?amount=1&category=18'



    const result = await fetch(`${APIUrl}`);
    const data = await result.json();

    // data contains response_code to value 0
    // data contains results array (length by amount parameter value)

    console.log(data.results[0]);
    */


}




