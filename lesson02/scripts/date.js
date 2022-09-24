const fecha = document.querySelector("#year")
const FECHA = new Date()
fecha.innerHTML= FECHA.toLocaleDateString('en-us',{year:'numeric'})


let text = document.lastModified;
document.getElementById("lastTimeModified").innerHTML = text;