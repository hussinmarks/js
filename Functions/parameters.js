/*
? parameters 
                   (1)
    function hi (name){
        clg(`hi, ${name}`)
                     (2)
    }

    hi("bruce")

    1. the parameter that the function is accepting
    2. using string interpolation, we can refer to the parameter that was given
    3. this is where we will define what the parameters value will be
        - known as an argument


*/

function order (stuff){
    console.log(`i traded my car for ${stuff}`);
}
order("burger")
order("taco")

/*





*/



function y(x, z){
    let y = x + " " + z;
console.log(`hi, my name is ${y}`);
}

y("mo", "marks");

function calc(x , y , operator){
    switch(operator){
        case "+":
            console.log("add", x , y);
            return x + y;
    }
    switch(operator){
        case "*":
            console.log("multi", x , y);
            return x * y;
    }
}

console.log(calc(2,2, "*"))