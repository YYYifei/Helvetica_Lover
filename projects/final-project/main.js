console.log("this works");

const bags = [
    {
      name: "A01",
      color: "yellow",
      image:
        "../../Assets/chanel bag/4.jpg"
    },
    {
      name: "A02",
      color: "yellow",
      image: "../../Assets/chanel bag/6.jpg"
    },
    {
      name: "A03",
      color: "yellow",
      image:
        "../../Assets/chanel bag/7.jpg"
    },
    {
      name: "A04",
      color: "yellow",
      image:
        "../../Assets/chanel bag/8.jpg"
    },
    {
        name: "B01",
        color: "blue",
        image:
          "../../Assets/chanel bag/9.jpg"
      },
      {
        name: "B02",
        color: "blue",
        image:
          "../../Assets/chanel bag/10.jpg"
      },
      {
        name: "B03",
        color: "blue",
        image:
          "../../Assets/chanel bag/112.jpg"
      },
      {
        name: "B04",
        color: "blue",
        image:
          "../../Assets/chanel bag/110.jpg"
      },
    {
      name: "C01",
      color: "red",
      image: "../../Assets/chanel bag/109.jpg"
    },
    {
        name: "C02",
        color: "red",
        image: "../../Assets/chanel bag/108.jpg"
      },
      {
        name: "C03",
        color: "red",
        image: "../../Assets/chanel bag/106.jpg"
      },
      {
        name: "C04",
        color: "red",
        image: "../../Assets/chanel bag/105.jpg"
      }
  ];

  const ul = document.querySelector("ul");

//---------- RENDER NAMES TO PAGE
  function renderBagsToPage(bags) {
    for (let i = 0; i < bags.length; i++) {
      let list_item = document.createElement("li");
      list_item.classList.add(bags[i].color, "card");
// add flower name
 let title = document.createElement("h3");
 title.textContent = bags[i].name;
// add flower color
 let color = document.createElement("p");
 color.classList.add(bags[i].color);
 color.textContent = bags[i].color;

 let image = document.createElement("img");
 image.setAttribute("src", bags[i].image);
// append created elements to page
 ul.appendChild(list_item);
 list_item.appendChild(title);
 list_item.appendChild(color);
 list_item.appendChild(image);
}
}
renderBagsToPage(bags);   


//---------- FILTER FLOWERS BY COLOR
let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(e) {
  // console.log("clicked", e.target);
  if (e.target.classList.contains("filter-btn")) {
    filterBtns.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains(filterValue) || filterValue === "all") {
        cards[i].classList.remove("hide");
        cards[i].classList.add("show");
      } else {
        cards[i].classList.remove("show");
        cards[i].classList.add("hide");
      }
    }
  }
}
filterBtns.addEventListener("click", filterFn);