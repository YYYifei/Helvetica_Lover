

console.log('this work');

const people = [
  { name: "adri" },
  { name: "becky" },
  { name: "chris" },
  { name: "dillon" },
  { name: "evan" },
  { name: "frank" },
  { name: "georgette" },
  { name: "hugh" },
  { name: "igor" },
  { name: "jacoby" },
  { name: "kristina" },
  { name: "lemony" },
  { name: "matilda" },
  { name: "nile" },
  { name: "ophelia" },
  { name: "patrick" },
  { name: "quincy" },
  { name: "roslyn" },
  { name: "solene" },
  { name: "timothy" },
  { name: "uff" },
  { name: "violet" },
  { name: "wyatt" },
  { name: "x" },
  { name: "yadri" },
  { name: "zack" }
];

//grab the ul from the web page
const ul = document.querySelector(`ul`);

function renderNamesToPage(array){
    for(let i = 0; i < people.length; i++){
        //console.log(people[i])
        //create list item
        let li = document.createElement(`li`);
        li.textContent = people[i].name
        // append the list items to the page
        ul.appendChild(li)
    }
}

renderNamesToPage(people)