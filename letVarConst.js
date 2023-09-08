// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.

{
    console.log(first);     // undefined
    console.log(second);    // ReferenceError: Cannot access 'second' before initialization
    console.log(third);     // ReferenceError: Cannot access 'third' before initialization
    
    var first = "Golu";
    let second = "Kumar"
    const third = "Singh"
    
    console.log(first);    // Golu
    console.log(second);   // Kumer
    console.log(third);    // Singh
}