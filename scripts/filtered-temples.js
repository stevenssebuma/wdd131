const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);

const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});

function changeMenu(menu) {
    document.getElementById('menuHeading').innerText = menu;
}

const homebutton = document.getElementById("home");
homebutton.addEventListener("click", () => {
  changeMenu("Home");
  createTempleCard(temples);
});

const oldbutton = document.getElementById("old");
oldbutton.addEventListener("click", () => {
  changeMenu("Old Temples")
  let newlist = temples.filter(temple => {
    const dedication = new Date(temple.dedicated);
    if(dedication.getFullYear() < 1900) return true;
    return false;
  });
  createTempleCard(newlist);
});

const newbutton = document.getElementById("new");
newbutton.addEventListener("click", () => {
  changeMenu("New Temples");
  let newlist = temples.filter(temple => {
    const dedication = new Date(temple.dedicated);
    return(dedication.getFullYear() > 2000);
  });
  createTempleCard(newlist);
});

const smallbutton = document.getElementById("small");
smallbutton.addEventListener("click", () => {
  changeMenu("Small Temples");
  let newlist = temples.filter(temple => temple.area < 10000);
  createTempleCard(newlist);
});

const largebutton = document.getElementById("large");
largebutton.addEventListener("click", () => {
  changeMenu("Large Temples");
  let newlist = temples.filter(temple => temple.area > 90000);
  createTempleCard(newlist);
});

const temples = 
[
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bentonville Arkansas",
        location: "Bentonville Arkansas",
        dedicated: "2023, September, 17",
        area: 26472,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/800x800/Bentonville-Temple-Exterior-13.jpg"
    },
    {
        templeName: "Kinshasa D.R Congo",
        location: "Kinshasa D.R Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/800x800/Bentonville-Temple-Exterior-13.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful Utah",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/800x500/bountiful-temple-766347-wallpaper.jpg"
    }
    // Add more temple objects here...
  ];

  
  function createTempleCard(templelist) {
    const temp = document.querySelector(".temple-img");
    temp.innerHTML = '';
    templelist.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span>${temple.area}`;
        img.setAttribute("src",temple.imageUrl);
        img.setAttribute("alt",`${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        temp.appendChild(card);
    });
}
createTempleCard(temples);