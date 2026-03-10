function enterCity(){

let city = document.getElementById("citySelect").value

localStorage.setItem("city", city)

window.location.href="city-health.html"

}