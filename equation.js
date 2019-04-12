
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

function operations() {}

 
//Create the random generating Add
operations.prototype.initializeAddition = function(){
    createRandomNums();
    question.textContent =  num1 + " + " + num2 + " = ?";
    correctAnswer = num1 + num2;
}

operations.prototype.initializeSubtraction = function(){
    createRandomNums();
    question.textContent =  num1 + " - " + num2 + " = ?";
    correctAnswer = num1 - num2;
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
        
}

operations.prototype.initializeMultiplication = function(){
    createRandomNums();
    question.textContent =  num1 + " X " + num2 + " = ?";
    correctAnswer = num1 * num2;
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

function restartNum(){
    num1 = "";
    num2 = "";
    correctAnswer = null;
    inputValue.value = "";
    question.textContent = "# ? #";
}

function checkAnswer(){
    let guess = Number(inputValue.value);

    if(correctAnswer === guess){
        scoreNum++;
        message.textContent =  ("You got it!! Your score is now" + scoreNum);
        score.textContent = scoreNum;
        restartNum()
    }
    else {
        scoreNum--;
        message.textContent =  ("Sorry that was't quite right, try again." + scoreNum);
        score.textContent = scoreNum;
    }
}


