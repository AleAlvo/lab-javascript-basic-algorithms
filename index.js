// Iteration 1: Names and Input
console.log("I'm ready")
let hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mike";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let nameWithSpace = "";

for (let i = 0; i < hacker1.length; i++) {
    nameWithSpace += hacker1[i] + " ";
}

console.log(nameWithSpace.toUpperCase());

let nameBackwards = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    nameBackwards += hacker2[i];
}

console.log(nameBackwards);

if (nameWithSpace.localeCompare(nameBackwards) < 0) {
    console.log("The driver's name goes first.");
} else if (nameWithSpace.localeCompare(nameBackwards) > 0) {
    console.log("Yo, the navigator's name goes first definitely");
} else if (nameWithSpace.localeCompare(nameBackwards) === 0) {
    console.log("What?! You both have the same name?");
} else {
    console.log("error");
}
