console.log('this works');

/* const students = ["Alice", "Han", "Chi Chi", "Brent"]

for(let index = 0; index < students.length; index++){
    console.log('Name of Student is:' + index + " " + students[index])
    //index += 1 //index = index +1 // index++
} */

/* const age = 25;
const height = 5; */

/* console.log(age)
console.log(height) */

/* if(age < 8){
    console.log("Check out the Merry-Go-Round. You'll love it!")
} else if (age > 8 && age < 65 && height > 4.5){
    console.log("Check out the Roller Coaster. It's awesome!")
} else {
    console.log("Why not enjoy a float down the Lazy River?")
} */

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

//pick a random element from each array
//place it into the sentence
//https://css-tricks.com/snippets/javascript/select-random-item-array/

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adjective = adjectives[Math.floor(MAth.random() * adjectives.length)];

console.log(
    `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`
);

//string interpolation

//console.log(`My ${nouns} leaps ${adjectives} when I ${verbs} at a rainbow in the sky`)

//console.log("My " + noun + " leaps " + adjective) //concatenation