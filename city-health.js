let city = localStorage.getItem("city") || "Pune"

document.getElementById("cityName").innerText = city
let city = localStorage.getItem("city") || "Pune"

let cityElements = document.querySelectorAll("#cityName")

cityElements.forEach(el=>{
el.innerText = city
})