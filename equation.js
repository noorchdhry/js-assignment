
const question = document.querySelector('#question');
const message = document.querySelector('#message');
let inputValue = document.querySelector('#inputValue');
let correctAnswer;

function operations() {}
 

operations.prototype.initializeAddition = function(){
    num1 = Math.floor(Math.random() * 10); 
    num2 = Math.floor(Math.random() * 10); 
    console.log("lkj")
    question.textContent =  num1 + " + " + num2 + " ?";
    correctAnswer = num1 + num2;
}

const o = new operations;
const addBtn = document.querySelector('#add');
addBtn.onclick = o.initializeAddition;

function checkAnswer(){
    let guess = Number(inputValue.value);

    if(correctAnswer === guess){
        
        message.textContent =  "You got it!!";
    }
    else {
        message.textContent =  "Sorry that was't quite right, try again.";
    }
}


