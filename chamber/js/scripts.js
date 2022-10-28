//Burguer Menu-----------------------------------------
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;


//Year footer-------------------------------------------
const fecha = document.querySelector("#year")
const FECHA = new Date()
fecha.innerHTML= FECHA.toLocaleDateString('en-us',{year:'numeric'})


//Last time Modified------------------------------------
let text = document.lastModified;
document.getElementById("lastTimeModified").innerHTML = text;


//Date nav----------------------------------------------
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Banner-------------------------------------------------
const dayNumber = now.getDay();
const element = document.getElementById("banner");

if (dayNumber == 1 || dayNumber == 2 ) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}
