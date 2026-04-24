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

const apiKey = "076777de2252f718d7b2a97c81aa9d18";

const weatherUrl =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(weatherUrl);
const data = await response.json();

const temp = data.main.temp;
const condition = data.weather[0].main;

document.getElementById("weatherData").innerText =
temp + "°C " + condition;

} catch (error) {
    document.getElementById("weatherData").innerText = 'Weather unavailable';
}


// =========================
// AQI API
// =========================

const cityCoordinates = {
    Pune: { lat: 18.5204, lon: 73.8567 },
    Mumbai: { lat: 19.0760, lon: 72.8777 },
    Delhi: { lat: 28.7041, lon: 77.1025 },
    Bangalore: { lat: 12.9716, lon: 77.5946 }
};

const coords = cityCoordinates[city] || cityCoordinates["Pune"];

function pm25ToAqi(pm25) {
    const breakpoints = [
        { cLow: 0.0, cHigh: 12.0, aLow: 0, aHigh: 50 },
        { cLow: 12.1, cHigh: 35.4, aLow: 51, aHigh: 100 },
        { cLow: 35.5, cHigh: 55.4, aLow: 101, aHigh: 150 },
        { cLow: 55.5, cHigh: 150.4, aLow: 151, aHigh: 200 },
        { cLow: 150.5, cHigh: 250.4, aLow: 201, aHigh: 300 },
        { cLow: 250.5, cHigh: 350.4, aLow: 301, aHigh: 400 },
        { cLow: 350.5, cHigh: 500.4, aLow: 401, aHigh: 500 }
    ];

    for (const bp of breakpoints) {
        if (pm25 >= bp.cLow && pm25 <= bp.cHigh) {
            return Math.round(((bp.aHigh - bp.aLow) / (bp.cHigh - bp.cLow)) * (pm25 - bp.cLow) + bp.aLow);
        }
    }

    return Math.round(pm25 * 4);
}

function getAqiStatusKey(value) {
    if (value <= 50) return 'good';
    if (value <= 100) return 'moderate';
    if (value <= 200) return 'unhealthy';
    return 'very_poor';
}

function getAqiStatusLabel(key) {
    const labels = {
        good: 'Good',
        moderate: 'Moderate',
        unhealthy: 'Unhealthy',
        very_poor: 'Very Poor'
    };

    return labels[key] || key;
}

let lastAqiValue = null;

async function displayAqi(value) {
    lastAqiValue = value;
    const key = getAqiStatusKey(value);
    const status = getAqiStatusLabel(key);
    document.getElementById("aqiData").innerText =
        `${value} (${status})`;
}

const airPollutionUrl =
`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;

try {
    const res = await fetch(airPollutionUrl);
    const airData = await res.json();

    let pm25 = null;
    if (airData && airData.list && airData.list.length > 0) {
        pm25 = airData.list[0].components.pm2_5;
    }

    if (pm25 === null || pm25 === undefined) {
        throw new Error('OpenWeatherMap PM2.5 data not available');
    }

    const aqiValue = pm25ToAqi(pm25);
    await displayAqi(aqiValue);
} catch (error) {
    console.warn('OpenWeatherMap air pollution failed, falling back to WAQI if available:', error);

    try {
        const aqiToken = "6244ae3c82565c374fd024e143372e219decf13d";
        const aqiUrl = `https://api.waqi.info/feed/${city}/?token=${aqiToken}`;
        const res = await fetch(aqiUrl);
        const aqiData = await res.json();
        const aqiValue = aqiData.data?.aqi;

        if (typeof aqiValue === 'number') {
            await displayAqi(aqiValue);
        } else {
            throw new Error('WAQI fallback returned invalid AQI');
        }
    } catch (fallbackError) {
        console.warn('WAQI fallback failed:', fallbackError);
        document.getElementById("aqiData").innerText = 'AQI unavailable';
    }
}

});