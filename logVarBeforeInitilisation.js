// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
// the function using the var keyword and log its value to the console before it is assigned a value to
// demonstrate variable hoisting.

function add( a, b){
    console.log(c);  //undefined
    var c = a+b;
    return c;
}
console.log(add(2,3)); //15