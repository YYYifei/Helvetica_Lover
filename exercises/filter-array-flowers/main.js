console.log('this works')

//---------- DATASET

const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    color: "yellow",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
  }
];

//---------- RENDER FLOWERS TO PAGE

const ul = document.querySelector("ul");

function renderFlowersToPage(results) {
    // iterate over data set
    for(let i = 0; i< results.length; i++){
        //create the list item
        let listItem = document.createElement('li');
        //add a class to each item of the resuts
        listItem.classList.add('card', results[i].color) //red
        //add the flower name
        let title = document.createElement('h3')
        title.textContent = result[i].name //rose
    }
}
renderFlowersToPage(flowers);

//---------- FILTER FLOWERS BY COLOR

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(e) {}
filterBtns.addEventListener("click", filterFn);