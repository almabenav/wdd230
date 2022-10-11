const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', function() {

    const item = input.value;
    input.value = '';

    const newLI = document.createElement("li");
    const deleteBtn = document.createElement("button");


    newLI.textContent = item;
    deleteBtn.innerHTML ="\u274C";
    newLI.appendChild(deleteBtn);
    list.appendChild(newLI);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(newLI);
      });

      input.focus();

});