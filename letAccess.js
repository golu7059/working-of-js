// 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// assigned a value to demonstrate the temporal dead zone.

{
    console.log(first);   // ReferenceError: Cannot access 'x' before initialization
    
    let x = "Golu";
    
    console.log(first);   // Golu
     
}