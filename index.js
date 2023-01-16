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


//BONUS TIME!

//Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor id nisl eu imperdiet. Nullam pretium enim nec est sodales, et vestibulum odio varius. Morbi sit amet mauris nec ex luctus congue. Sed porttitor dui id velit mattis, quis pretium libero gravida. Suspendisse sagittis tellus vitae enim pulvinar tempus. Praesent vel est accumsan, laoreet dolor quis, dictum orci. Vestibulum id elit sollicitudin, luctus turpis eu, sagittis metus. Integer vitae dolor eget quam luctus gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu nulla gravida, porttitor metus et, pellentesque ante. Integer rutrum posuere ipsum et tempus. Proin ac molestie enim. Nunc sit amet cursus tellus. Pellentesque ut pellentesque odio. Ut faucibus maximus lorem nec faucibus. Morbi sed tellus a massa varius pellentesque ut eget tortor. Nam ornare pharetra mauris, ut ornare justo. Proin ultricies dolor scelerisque massa eleifend pellentesque. Etiam venenatis metus sit amet leo dignissim, in ornare arcu euismod. Vivamus eget ex imperdiet dui semper fringilla quis tincidunt nibh. Duis vel ante at metus consequat porttitor ac nec nulla. Integer ac ante in orci feugiat pulvinar sed quis diam. Praesent fringilla enim sed nulla efficitur, eu pharetra est vestibulum. Suspendisse vestibulum sem eu lorem cursus, eget porttitor ligula sodales. Proin elementum urna vel massa gravida, sed commodo neque eleifend. Suspendisse gravida sapien dui, vitae sollicitudin urna ullamcorper quis. In mattis vehicula lacus nec cursus. Fusce sit amet eros condimentum, fringilla metus ac, semper orci. Etiam tristique pretium erat et interdum. Aliquam feugiat dictum odio sed tempor. In facilisis eu ligula sit amet viverra. Duis viverra nibh ut ex fringilla, ut scelerisque nisi auctor. Donec consequat sapien lectus, quis dapibus lectus varius nec. Ut in turpis vitae eros congue pulvinar in ac nibh. Integer laoreet dapibus purus vitae laoreet. Curabitur et tellus vel mi dignissim blandit."

let etCount = 0;
for(let i = 0; i < longText.length; i++) {
    if (longText[i] + longText[i+1] === 'et') {
        etCount++;
    }
}
console.log(etCount);



//Bonus 2
let phraseToCheck = "This is just a phrase";

let phraseReversed = "";

for (let i = phraseToCheck.length - 1; i >=0; i--){
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        phraseReversed += phraseToCheck[i];
    }
};

//console.log(phraseReversed);

let phraseToCheckNoSpace ="";

for (i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        phraseToCheckNoSpace += phraseToCheck[i];
    }
};

//console.log(phraseToCheckNoSpace);

if (phraseToCheckNoSpace === phraseReversed) {
    console.log("This phrase is a palindrome.")
} else {
    console.log("This phrase is not a palindrome.")
}


/* phraseToCheck = "race car";
phraseReversed = "";

for (let i = phraseToCheck.length - 1; i >=0; i--){
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        phraseReversed += phraseToCheck[i];
    }
};

console.log(phraseReversed);

phraseToCheckNoSpace ="";

for (i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        phraseToCheckNoSpace += phraseToCheck[i];
    }
};

console.log(phraseToCheckNoSpace);

if (phraseToCheckNoSpace === phraseReversed) {
    console.log("This phrase is a palindrome.")
} else {
    console.log("This phrase is not a palindrome.")
} */