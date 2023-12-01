/*
?   While loop structure

    while (expression) {
        ...code to run if expression is true
    }


    - The main purpose for while loops are when iteration is uncertain
    - Ex) If we wanted to guess a spade from a randomized amount of cards, we can use a while loop to continuously go through until the condition is met
*/

let numArr = [1, 5, 35, -23, 0, 3, 10, 4.34];
let index = 0;
let sum = 0;

while (index < numArr.length) {
  // console.log(numArr[index]);
  numArr[index] > 0 && (sum += numArr[index]);
  index++;
}

// console.log(`The sum of all the positive integers is: ${sum}`);

let city = [
  "building",
  "sign",
  "window",
  "bridge",
  "lighthouse",
  "light pole",
  "tree",
  "empty street",
];

let structure = city[0];
let pos = 0;

while (structure != "empty street") {
  // console.log(`Spiderman swings from the ${structure}`);
  pos++;

  structure = city[pos];
}

// console.log(`Spider man is landing in the ${structure}`);

let spidyHP = 20;
let badGuys = [
  {
    baddie: "Green Goblin",
    hp: 15,
  },
  {
    baddie: "Venom",
    hp: 25,
  },
  {
    baddie: "Stilt-man",
    hp: 5,
  },
  {
    baddie: "Thug",
    hp: 0,
  },
];

/*
?   Do while

    do {
      ...code block
    } while (expression)

    - works just like a while loop with the exception that it will run our code block at least once.

*/

let random = Math.floor(Math.random() * badGuys.length);
// console.log(random);
let villain = badGuys[random];
// console.log(villain);

console.log(`${villain.baddie} has appeared.`);

do {
  if (villain.baddie === "Thug") {
    console.log("Spider-Man webs the thug... EZPZ");
    break;
  }

  console.log(`${villain.baddie} hits Spider-Man!`);
  spidyHP--;
  console.log("Spider-Man HP:", spidyHP);

  let spidyHit = Math.floor(Math.random() * 3);
  console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage`);

  villain.hp -= spidyHit;
  console.log("Villain HP", villain.hp);

  if (spidyHP === 0) {
    break;
  }
} while (villain.hp > 0);

villain.hp <= 0
  ? console.log(`Spider-Man captures ${villain.baddie}`)
  : console.log(`${villain.baddie} has taken down Spider-Man`);

// fizz buzz

  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}