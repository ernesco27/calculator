const entryView = document.querySelector('.entry');
const answerView = document.querySelector('.answer');
const keys = document.querySelectorAll('.key-input');
const operands = document.querySelectorAll('.key-op');
const equal = document.querySelector('.key-total');
const dot = document.getElementById('dot');
const clear = document.getElementById('clear');
const back = document.getElementById('back');
const footer = document.querySelector('footer');

let num1 = " ";
let num2 = " ";
let operator = " ";

//the functions for each arithmetic operation is given below

function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}



function subtract(num1, num2){
    return parseFloat(num2) - parseFloat(num1);
}

function times(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}

function divided(num1, num2){
    return parseFloat(num2) / parseFloat(num1);
}

function percentage(num2){
    return parseFloat(num2) / 100;
}


//this function is to remove a wrong entry
function remove(){
    if(operator === ""){
        num1 = num1.slice(0, num1.length - 1)
        entryView.textContent = num1;
    }else{
        num1 = num1.slice(0, num1.length - 1);
        entryView.textContent = num1;
    }
}
  
//this function is to perform the required operation depending on the operator selected

function operate(){
    if(operator == "+"){
       return add(num1,num2);
    }else if(operator == "-"){
        return subtract(num1,num2);
    }else if(operator == "/"){
        return divided(num1,num2);
    }else if(operator == "x"){
        return times(num1,num2);
    }else if(operator == "%"){
        return percentage(num2)
    }
}


//added event listeners to all the keys

keys.forEach(key => key.addEventListener('click', (e) =>{
    num1 += key.textContent ;
    entryView.textContent = num1;
    return;
}))

operands.forEach(operand => operand.addEventListener('click', (e) =>{
    if(num2 !== " "){
        num1 = operate();
        entryView.textContent = `${num1} ${operator}`;
    }
    operator = operand.textContent;
    num2 = num1;
    num1 = " ";
    entryView.textContent = `${num2} ${operator} ${num1}`; 
    return;  
}))

function display(e){
    if(num1 == " "){
        num1 += '0'
    }
    if(num1.includes('.'))return
    num1 += '.';
    entryView.textContent = num1;
}

dot.addEventListener('click', display);

clear.addEventListener('click', ()=>{
    entryView.textContent = " ";
    num1 = " ";
    num2 = " ";
    operator = " ";
    answerView.textContent = " ";

});

 equal.addEventListener('click', function(){
    let result = operate();
    answerView.textContent = result;
    entryView.textContent = `${num2} ${operator} ${num1}`;
 })


back.addEventListener('click', remove);

footer.textContent += ` Kwabena, ${new Date().getFullYear()} 💖` ;


