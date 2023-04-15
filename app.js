const entryView = document.querySelector('.entry');
const answerView = document.querySelector('.answer');
const keys = document.querySelectorAll('.key-input');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const plusOrMinus = document.getElementById('plus-minus');
const equals = document.getElementById('equals');
const dot = document.getElementById('dot');
const percent = document.getElementById('percentage');
const clear = document.getElementById('clear');
const back = document.getElementById('back');

let num1 = " ";
let num2 = " ";
let operator = " ";

function add(num1,num2){
    return num1 + num2;
}

//add event listeners to all the keys

zero.addEventListener('click', ()=>{
    num1 += '0';
    entryView.textContent = num1;

});

one.addEventListener('click', ()=>{
    num1 += '1';
    entryView.textContent = num1;
});

two.addEventListener('click', ()=>{
    num1 += '2';
    entryView.textContent = num1;
});

three.addEventListener('click', ()=>{
    num1 += '3';
    entryView.textContent = num1;
});

four.addEventListener('click', ()=>{
    num1 += '4';
    entryView.textContent = num1;
});

five.addEventListener('click', ()=>{
    num1 += '5';
    entryView.textContent = num1;
});

six.addEventListener('click', ()=>{
    num1 += '6';
    entryView.textContent = num1;
});

seven.addEventListener('click', ()=>{
    num1 += '7';
    entryView.textContent = num1;
});

eight.addEventListener('click', ()=>{
    num1 += '8';
    entryView.textContent = num1;
});

nine.addEventListener('click', ()=>{
    num1 += '9';
    entryView.textContent = num1;
});

function display(e){
    num1 += '.';
    entryView.textContent = num1;
}

dot.addEventListener('click', display, {
    once: true,
    capture:false
});

clear.addEventListener('click', ()=>{
    entryView.textContent = " ";
    num1 = " ";
    num2 = " ";
    operator = " ";
});

divide.addEventListener('click', ()=>{
    num1 += '/';
    entryView.textContent = num1;
});

percent.addEventListener('click', ()=>{
    num1 += '%';
    entryView.textContent = num1;
});

equals.addEventListener('click', ()=>{
    num1 += '=';
    entryView.textContent = num1;
});

minus.addEventListener('click', ()=>{
    num1 += '-';
    entryView.textContent = num1;
});

plus.addEventListener('click', ()=>{
    num1 += '+';
    entryView.textContent = num1;
});

multiply.addEventListener('click', ()=>{
    num1 += 'x';
    entryView.textContent = num1;
});

// back.addEventListener('click', ()=>{
//     num1 -= ' ';
//     entryView.textContent = num1;
// });


