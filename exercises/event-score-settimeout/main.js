console.log("This code is loading the JavaScript file");

let materials = ["wood", "brick", "broken dishes", "dust", "leaves", "grass"];

let places = [
  "cold, windy climate",
  "desert",
  "deserted airport",
  "deserted church",
  "deserted factory",
  "hot climate",
  "metropolis"
];

let people = [
  "collectors of all types",
  "fishermen and families",
  "french and german speaking people",
  "old friends",
  "horses and birds",
  "little boys",
  "lovers"
];

let thing = [
  "natural light",
  "all available lighting",
  "candles",
  "electricity"
];

//[1]select a random element from each array
//[2]weite a function generatePoem() render this randomised text to the page
//have this function run on window load

function selectRandomElement(array){
    let randomizer = array[Math.floor(Math.random() * array.length)]
    return randomizer;
}

function generatePoem(n){
    //select a random element from each array
    let randomMaterial = selectRandomElement(materials);
    let randomPlace = selectRandomElement(places);
    let randomPeople = selectRandomElement(people);
    let randomThing = selectRandomElement(thing);

    for(let i = 0; i < n; i++){
        setTimeout(generatePoem, i * 1000)
    };

    //grab the container element on the web page
    const container = document.querySelector('.container');

    //create a new paragraph element
    const paragraph = document.createElement('p');

    //constructuin sentence
    paragraph.textContent = `A house of ${randomMaterial} in a ${randomPlace} using ${randomThing} inhabited by ${randomPeople}`

    //append the paragraph to the page
    container.appendChild(paragraph)
}

//call / invoke the function
window.addEventListener('load', fuction(){
    generatePoem(8)
})
//generatePoem(5)

