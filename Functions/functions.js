/*
? functions
    - reusable block of code
    - can return data to kick it back outside of the functions
    - simplified program that runs a task

? function declaration
    (1) (2) 
    function hi(){
        clg("hi")
    }



*/

function hi(){
    console.log("hi")
}

hi();

/*
? function expressions

    (1)
    let hey = function hi(){
        clg("hi")
    }

        1. the "hey" is now a representative of the function hi()

        *they do not get hoisted


*/

function greetings() {
    console.log("hello");
}

greetings;
greetings();


// create a counting function 


console.log(first)