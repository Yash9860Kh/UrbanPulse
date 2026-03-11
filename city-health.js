const greenAreas = {

Pune: [
{location:"Empress Garden", type:"Garden", oxygen:"High"},
{location:"Pashan Lake", type:"Wetland", oxygen:"Medium"},
{location:"Baner Hill", type:"Forest", oxygen:"High"},
{location:"Taljai Forest", type:"Forest", oxygen:"High"},
{location:"Okayama Garden", type:"Garden", oxygen:"Medium"}
],

Mumbai: [
{location:"Sanjay Gandhi National Park", type:"Forest", oxygen:"High"},
{location:"Powai Lake", type:"Wetland", oxygen:"Medium"},
{location:"Hanging Gardens", type:"Garden", oxygen:"Medium"},
{location:"Aarey Forest", type:"Forest", oxygen:"High"},
{location:"Joggers Park", type:"Garden", oxygen:"Medium"}
],

Delhi: [
{location:"Lodhi Garden", type:"Garden", oxygen:"Medium"},
{location:"Yamuna Biodiversity Park", type:"Forest", oxygen:"High"},
{location:"Sanjay Lake", type:"Wetland", oxygen:"Medium"},
{location:"Nehru Park", type:"Garden", oxygen:"Medium"},
{location:"Aravalli Biodiversity Park", type:"Forest", oxygen:"High"}
],

Bangalore: [
{location:"Cubbon Park", type:"Garden", oxygen:"High"},
{location:"Lalbagh Botanical Garden", type:"Garden", oxygen:"High"},
{location:"Ulsoor Lake", type:"Wetland", oxygen:"Medium"},
{location:"Bannerghatta Forest", type:"Forest", oxygen:"High"},
{location:"JP Park", type:"Garden", oxygen:"Medium"}
]

};


document.addEventListener("DOMContentLoaded", async () => {

const city = localStorage.getItem("city") || "Pune";


// =========================
// GREEN AREAS TABLE
// =========================

const table = document.getElementById("greenTable");

if(table){

table.innerHTML = "";

const areas = greenAreas[city] || greenAreas["Pune"];

areas.forEach(area => {

const row = `
<tr>
<td>${area.location}</td>
<td>${area.type}</td>
<td>${area.oxygen}</td>
</tr>
`;

table.innerHTML += row;

});

}


// =========================
// WEATHER API
// =========================

const apiKey = "API_KEY";

const weatherUrl =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(weatherUrl);
const data = await response.json();

const temp = data.main.temp;
const condition = data.weather[0].main;

document.getElementById("weatherData").innerText =
temp + "°C " + condition;

}catch(error){

document.getElementById("weatherData").innerText =
"Weather unavailable";

}


// =========================
// AQI API
// =========================

const aqiToken = "API_KEY";

const aqiUrl =
`https://api.waqi.info/feed/${city}/?token=${aqiToken}`;

try{

const res = await fetch(aqiUrl);
const aqiData = await res.json();

const aqiValue = aqiData.data.aqi;

let status = "";

if(aqiValue <= 50) status = "Good";
else if(aqiValue <= 100) status = "Moderate";
else if(aqiValue <= 200) status = "Unhealthy";
else status = "Very Poor";

document.getElementById("aqiData").innerText =
aqiValue + " (" + status + ")";

}catch(error){

document.getElementById("aqiData").innerText =
"AQI unavailable";

}

});

