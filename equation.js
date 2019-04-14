
const question = document.querySelector('#question');
const message = document.querySelector('#message');
let inputValue = document.querySelector('#inputValue');
let score = document.querySelector('#score');
let correctAnswer;
let scoreNum = 0;

function createRandomNums(){
    num1 = Math.floor(Math.random() * 10); 
    num2 = (Math.floor(Math.random() * 10)) + 1; 
}

window.onload = function() {
    const oldScore = window.localStorage.getItem('oldScore');
    if(oldScore > 0){
        score.textContent = oldScore;
        scoreNum = oldScore;
    } else {
        return 0;
    }
  };

function operations() {}

 
//Create the random generating Add
operations.prototype.initializeAddition = function(){
    createRandomNums();
    question.textContent =  num1 + " + " + num2 + " = ?";
    correctAnswer = num1 + num2;
    window.localStorage.setItem('oldEquation', question.textContent);
    window.localStorage.setItem('oldAnswer', correctAnswer);
    window.localStorage.setItem('oldOperator', 'add');
}

operations.prototype.initializeSubtraction = function(){
    createRandomNums();
    question.textContent =  num1 + " - " + num2 + " = ?";
    correctAnswer = num1 - num2;
    window.localStorage.setItem('oldEquation', question.textContent);
    window.localStorage.setItem('oldAnswer', correctAnswer);
    window.localStorage.setItem('oldOperator', 'subtract');
}

operations.prototype.initializeDivision = function(){
    do{
       num1 = Math.floor(Math.random() * 10); 
        num2 = (Math.floor(Math.random() * 10)) + 1; 
        r = num1 % num2;
    } while(r === 0)
     createRandomNums();
    question.textContent =  num1 + " / " + num2 + " = ?";
    correctAnswer = num1 / num2; 
    window.localStorage.setItem('oldEquation', question.textContent);
    window.localStorage.setItem('oldAnswer', correctAnswer);
    window.localStorage.setItem('oldOperator', 'divide');
}

operations.prototype.initializeMultiplication = function(){
    createRandomNums();
    question.textContent =  num1 + " X " + num2 + " = ?";
    correctAnswer = num1 * num2;
    window.localStorage.setItem('oldEquation', question.textContent);
    window.localStorage.setItem('oldAnswer', correctAnswer);
    window.localStorage.setItem('oldOperator', 'multiple');
}

function restartNum(){
    num1 = "";
    num2 = "";
    correctAnswer = null;
    inputValue.value = "";
    question.textContent = "# ? #";
}

operations.prototype.checkAnswer = function(){
    let guess = Number(inputValue.value);

    if(correctAnswer !== guess){
        scoreNum--;
        message.textContent =  ("Sorry that was't quite right, try again." + scoreNum);
        score.textContent = scoreNum;
        window.localStorage.setItem('oldScore', scoreNum);
    }
    else {
        scoreNum++;
        message.textContent =  ("You got it!! Your score is now: " + scoreNum);
        score.textContent = scoreNum;
        restartNum()
        window.localStorage.setItem('oldScore', scoreNum);
    }
}

const o = new operations;
const addBtn = document.querySelector('#add');
addBtn.onclick = o.initializeAddition;

const subtractBtn = document.querySelector('#subtract');
subtractBtn.onclick = o.initializeSubtraction;

const divideBtn = document.querySelector('#divide');
divideBtn.onclick = o.initializeDivision;

const multiplyBtn = document.querySelector('#multiply');
multiplyBtn.onclick = o.initializeMultiplication;

const inputBtn = document.querySelector('#inputBtn');
inputBtn.onclick = o.checkAnswer;


