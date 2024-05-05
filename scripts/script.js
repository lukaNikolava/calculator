let nums = document.querySelectorAll('.num');
let reset = document.querySelector('.reset');
let del = document.querySelector('.delete');
let percent = document.querySelector('.percent');
let division = document.querySelector('.division');
let multiplication = document.querySelector('.multiplication');
let deduction = document.querySelector('.deduction');
let addition = document.querySelector('.addition');
let equal = document.querySelector('.equals');
let display = document.querySelector('.display');

nums.forEach((number)=>{
    number.addEventListener('click' , ()=>{
        display.innerHTML += number.textContent;
    })
})
equal.addEventListener('click' , ()=>{
    let result = eval(display.textContent);
    display.innerHTML = result;
})
reset.addEventListener('click' , ()=>{
    display.innerHTML = ""
})
del.addEventListener('click' , ()=>{
    display.innerHTML = display.textContent.slice(0 , -1);
})