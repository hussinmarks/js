/*
conditional statement 
    checks if statement is true
    if true dose something
    if false dose nothing unless told other wise

expressions vs statements 
    statements 
        keyword
        expression
        {} code block
    expressions
        unprocessed value
        evaluated to be truthy
        can also be empty

statements evaluate and execute code blocks when invoked
    conditional is an example of a statement

if statements 
    checks if a statement is true and executes the code if true

*/ 

/*
    else
        does the
*/

if (lightswitch == "on") {
    console.log ("the light switch is on")
} else {
    console.log ("light isnt working")
}

let temp = 52;

if (temp > 80) {
   console.log  ("its hot")  
} else if (temp)


/*

*/

let age = 17;

if (age < 16 ) {
    console.log("cant drive, cant vote, cant drink");
} else if (age < 18 ) {
    console.log("can drive, can vote, cant drink");
} else if (age < 21 ) {
    console.log("can drive, can vote, can drink");
}

let age = 16;

age < 16 ? 
console.log("cant drive, cant vote, cant drink") 
:age < 18 ? 
console.log("can drive, can vote, cant drink") 
:age < 21 ? 
console.log("can drive, can vote, can drink") 
:null;