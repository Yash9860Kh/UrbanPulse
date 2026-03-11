function enterCity(){

let city = document.getElementById("citySelect").value

localStorage.setItem("city", city)

window.location.href="city-health.html"

}   
const cityDropdown = document.getElementById("citySelect");

window.addEventListener("DOMContentLoaded", () => {

const savedCity = localStorage.getItem("city");

if(savedCity){
cityDropdown.value = savedCity;
}else{
cityDropdown.value = "";
}

});

cityDropdown.addEventListener("change", function(){

const city = this.value;

if(city === ""){

localStorage.removeItem("city");

window.location.href = "index.html";

return;

}

localStorage.setItem("city", city);

window.location.href = "city-health.html";

});
document.addEventListener("DOMContentLoaded", () => {
    const city = localStorage.getItem("city") || "Pune";
    const navCity = document.getElementById("navCityName");
    if (navCity) {
        navCity.innerText = city;
    }
});
