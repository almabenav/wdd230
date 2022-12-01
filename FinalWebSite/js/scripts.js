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