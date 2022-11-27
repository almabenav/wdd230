const requestwebsite = 'https://almabenav2.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

fetch(requestwebsite)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const business = jsonObject['business'];
    business.forEach(displayBusiness);  
  });


function displayBusiness (business) {
  let card = document.createElement('div');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let a = document.createElement('a')
  let logo = document.createElement('img');
  
  logo.setAttribute('src', business.logourl);
  logo.setAttribute('alt',` ${business.name} logo`)
  logo.setAttribute('loading', 'lazy');
  a.setAttribute('href', business.website);
  a.setAttribute("target", "_blank");
  a.textContent = business.website;

  p1.textContent = `${business.address}`;
  p2.textContent = `${business.phone}`;
  h2.textContent = `${business.name}`;
  
  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(a);
  
  document.querySelector('div.cards').appendChild(card);
}

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
