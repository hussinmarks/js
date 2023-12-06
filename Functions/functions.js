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


function counting(){
    for(let i = 1; <=20; i++){
        console.log(i);
    }
}

counting();

// 

let arr = ["this", "is", "really", "cool", true, 1, false];

function arrlist(){
    for(item of arr){
        console.log(item);
    }
}

arrlist();

let dogarray = [
    "husky",
    "shih tzu",
    "corgi",
    "shiba inu",
    "golden retriver",
];


function calldogs(){
    for(let dogindex in dogarray){
        console.log(dogarray[dogindex]);
    }
}

calldogs();


let num1 = 1;
let num2 = 2;

function addtownumbers() {
    let sum = num1 + num2;
    console.log(sum);
}


let ihavecoffee = true;

function coffee(){
    return ihavecoffee;
}

coffee();

console.log(coffee())















































