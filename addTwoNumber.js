// 01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call
// the function before it is declared to demonstrate hoisting.


// function calling before decleration
let c = addTwoNumber(5,3);
console.log(c);   //8


// decelaring function
function addTwoNumber(a,b){
    return a+b;
}

