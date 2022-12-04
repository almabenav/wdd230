const requestURL = "https://almabenav2.github.io/wdd230/BountifulFood/json/data.json"
const cardsImage = document.querySelector('.cardsImage');

async function getImages(){
    const response = await fetch(requestURL);
    const data = await response.json();
    data.forEach(image => {displayImages(image)});
  }

  function displayImages(image) {
  
    // Create elements to add to the document
    let cardsImage = document.createElement('figure');
    let photo = document.createElement('img');

    
    // 
    
    photo.setAttribute('src', `image.image`);
    photo.setAttribute('alt', `photo of ${image.name} `);
    photo.setAttribute('loading', 'lazy');


    card.appendChild(photo);

 // Add/append the existing HTML div with the cards class with the section(card)
    //document.querySelector('div.cards').appendChild(card);
    cardsImage.appendChild(cardsImage);
  
}
getImages();