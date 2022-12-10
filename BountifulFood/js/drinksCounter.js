const drinks = document.querySelector("#drinks_purchased");
let drinksCounter = Number(window.localStorage.getItem("drinks"));

if (drinksCounter !== 0) {
	drinks.textContent = `${drinksCounter}`;
} else {
	drinks.textContent = `none yet`;
}