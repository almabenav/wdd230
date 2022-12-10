const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    selectControls(jsonObject, '#fruit1');
    selectControls(jsonObject, '#fruit2');
    selectControls(jsonObject, '#fruit3');
  });

  function selectControls(drinks, controlId) {
    let select = document.querySelector(controlId)
    for(let x in drinks) {
      let option =  document.createElement("option")
      option.innerHTML = drinks[x].name;
      option.value = drinks[x].name;
      select.appendChild(option);
    }
    select.selectedIndex = -1;
  }
