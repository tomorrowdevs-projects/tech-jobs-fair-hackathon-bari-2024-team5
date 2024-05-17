// https://opentdb.com/api.php?amount=10

// code 429 to many request


const _question = document.getElementById('question')
const _option = document.querySelector('.quiz-options')
const _correctStore = document.getElementById('correct-store');
const _totalQuestion = document.getElementById('total-question');

let correctAnswer = 0, correctStore = 0, totalQuestion = 3;

document.addEventListener('DOMContentLoaded' , () => {
    loadQuestion();
    _totalQuestion.textContent = totalQuestion;
    _correctStore.textContent = correctStore;
})


async function loadQuestion() {
    // all category
    //const APIUrl = 'https://opentdb.com/api.php?amount=1'
    // only category computer science 18
    const APIUrl = 'https://opentdb.com/api.php?amount=1&category=18'



    const result = await fetch(`${APIUrl}`);
    const data = await result.json();

    // data contains response_code to value 0
    // data contains results array (length by amount parameter value)

    console.log(data.results[0]);
    showQuestion(data.results[0]);


}




function showQuestion(data) {
    let correctAnswer = data.correct_answer;
    //console.log(correctAnswer);
    let incorrectAnswer = data.incorrect_answers;
    let optionList = incorrectAnswer;

    //console.log(optionList);

    // Random in casual nuber beetwen 0 to 3
    const random = Math.floor(Math.random() * (incorrectAnswer.length + 1 ));
    optionList.splice(random,0,correctAnswer);
    //console.log(random);
    _question.innerHTML = `${data.question} <br> <span class="category">${data.category}
        </span>`

    _option.innerHTML = `
        ${optionList.map((option,index) => `<li> ${index + 1}. <span> ${option} </span> 
            </li>   `).join('')}
    `;


}



