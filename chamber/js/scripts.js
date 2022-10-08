//Burguer Menu
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}


//Year footer
const fecha = document.querySelector("#year")
const FECHA = new Date()
fecha.innerHTML= FECHA.toLocaleDateString('en-us',{year:'numeric'})


//Last time Modified
let text = document.lastModified;
document.getElementById("lastTimeModified").innerHTML = text;


//Date nav
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;

const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); 

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;




