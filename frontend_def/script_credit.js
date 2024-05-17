document.addEventListener('DOMContentLoaded', () => {
    loadCredit();
})


async function loadCredit() {
    // all category
    //const APIUrl = 'https://opentdb.com/api.php?amount=1'
    // only category computer science 18
    const APIUrl = 'https://backend-theta-woad.vercel.app/api/credits'



    const result = await fetch(`${APIUrl}`);
    const data = await result.json();

    // data contains response_code to value 0
    // data contains results array (length by amount parameter value)

    console.log(data);
    showCredit(data);


}

function showCredit(data) {

    document.write('<h1>Crediti</h1>');

    /*
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
    */

}