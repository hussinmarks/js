/*

? arrow function

    let hi = () => {
        clg("hi")
    }

    1. we need ro set the fat arrow function to the variable
    2.we use the `fat arrow` to signify tis a function


*/

let hi = () => {
    console.log("stuff");
};

hi();

let hi2 = () => console.log("something2");

hi2;

let hello = () => {
    let greeting = "hello";
    let moreinfo = "steve";
    return `${greeting}, ${moreinfo}`;
};

console.log(hello());

let apples1 = (x) => `there are ${x} apples`;

console.log(apples1(5));

let apples2 = (y) => {
    return `there are ${y} apples` ;
}

console.log(apples2(9));



