function openModule(id, event){

document.querySelectorAll(".module").forEach(m=>{
m.classList.remove("active")
})

document.querySelectorAll(".menu-item").forEach(i=>{
i.classList.remove("active")
})

document.getElementById(id).classList.add("active")

if(event){
event.currentTarget.classList.add("active")
}

}
function openModule(id){

document.querySelectorAll(".module").forEach(m=>{
m.classList.remove("active")
})

document.querySelectorAll(".menu-item").forEach(i=>{
i.classList.remove("active")
})

document.getElementById(id).classList.add("active")

event.currentTarget.classList.add("active")

}
document.addEventListener("DOMContentLoaded", () => {
    const city = localStorage.getItem("city") || "Pune";
    const navCity = document.getElementById("navCityName");
    if (navCity) {
        navCity.innerText = city;
    }
});
const imageInput = document.getElementById("issueImage");

imageInput.addEventListener("change", function(){

const file = this.files[0]

if(file){

const reader = new FileReader()

reader.onload = function(e){

const img = document.getElementById("previewImg")
img.src = e.target.result
img.style.display="block"

}

reader.readAsDataURL(file)

}

})

// 1. Data Definitions
const greenAreas = {
    Pune: [
        {location: "Empress Garden", type: "Garden", oxygen: "High", coords: [18.5007, 73.8777]},
        {location: "Pashan Lake", type: "Wetland", oxygen: "Medium", coords: [18.5400, 73.7870]},
        {location: "Baner Hill", type: "Forest", oxygen: "High", coords: [18.5477, 73.7925]},
        {location: "Taljai Forest", type: "Forest", oxygen: "High", coords: [18.4839, 73.8444]},
        {location: "Okayama Garden", type: "Garden", oxygen: "Medium", coords: [18.4913, 73.8368]}
    ],
    Mumbai: [
        {location: "Sanjay Gandhi National Park", type: "Forest", oxygen: "High", coords: [19.2215, 72.9131]},
        {location: "Powai Lake", type: "Wetland", oxygen: "Medium", coords: [19.1256, 72.9051]},
        {location: "Hanging Gardens", type: "Garden", oxygen: "Medium", coords: [18.9567, 72.8052]},
        {location: "Aarey Forest", type: "Forest", oxygen: "High", coords: [19.1485, 72.8712]},
        {location: "Joggers Park", type: "Garden", oxygen: "Medium", coords: [19.0622, 72.8214]}
    ],
    Delhi: [
        {location: "Lodhi Garden", type: "Garden", oxygen: "Medium", coords: [28.5931, 77.2191]},
        {location: "Yamuna Biodiversity Park", type: "Forest", oxygen: "High", coords: [28.7495, 77.2215]},
        {location: "Sanjay Lake", type: "Wetland", oxygen: "Medium", coords: [28.6117, 77.3015]},
        {location: "Nehru Park", type: "Garden", oxygen: "Medium", coords: [28.5933, 77.1957]},
        {location: "Aravalli Biodiversity Park", type: "Forest", oxygen: "High", coords: [28.5414, 77.1491]}
    ],
    Bangalore: [
        {location: "Cubbon Park", type: "Garden", oxygen: "High", coords: [12.9779, 77.5952]},
        {location: "Lalbagh Botanical Garden", type: "Garden", oxygen: "High", coords: [12.9507, 77.5848]},
        {location: "Ulsoor Lake", type: "Wetland", oxygen: "Medium", coords: [12.9815, 77.6229]},
        {location: "Bannerghatta Forest", type: "Forest", oxygen: "High", coords: [12.8013, 77.5777]},
        {location: "JP Park", type: "Garden", oxygen: "Medium", coords: [13.0360, 77.5558]}
    ]
};
const cyclingPaths = {
    Pune: [[[18.5204, 73.8567], [18.5300, 73.8500], [18.5400, 73.8600]]],
    Mumbai: [[[19.0760, 72.8777], [19.0850, 72.8850]]],
    Delhi: [[[28.6139, 77.2090], [28.6250, 77.2200]]],
    Bangalore: [[[12.9716, 77.5946], [12.9850, 77.6050]]]
};

// Ensure map instance is global so we can check if it exists
let coolMap; 

function openModule(id, event) {
    // 1. Hide all modules and deactivate menu items
    document.querySelectorAll(".module").forEach(m => m.classList.remove("active"));
    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));

    // 2. Show the target module
    const target = document.getElementById(id);
    if (target) {
        target.classList.add("active");
    }

    // 3. Highlight the menu item if event exists
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }

    // 4. If we open the 'cool' module, trigger the map
    if (id === 'cool') {
        initCoolMap();
    }
}

function initCoolMap() {
    // Get city from localStorage (fallback to Pune)
    const userCity = localStorage.getItem('city') || 'Pune';
    const citySpots = greenAreas[userCity] || greenAreas['Pune'];

    // Initialize map if it doesn't exist
    if (!coolMap) {
        coolMap = L.map('coolMap').setView(citySpots[0].coords, 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(coolMap);
    } else {
        // If it exists, just move the view (Refresh logic)
        coolMap.setView(citySpots[0].coords, 12);
        
        // Clear old markers/lines before re-adding
        coolMap.eachLayer((layer) => {
            if (layer instanceof L.Marker || layer instanceof L.Polyline) {
                coolMap.removeLayer(layer);
            }
        });
    }

    // Add Green Markers
    citySpots.forEach(spot => {
        L.marker(spot.coords)
            .addTo(coolMap)
            .bindPopup(`<b>🌳 ${spot.location}</b><br>Oxygen: ${spot.oxygen}`);
    });

    // Add Cycling Paths
    if (cyclingPaths[userCity]) {
        cyclingPaths[userCity].forEach(path => {
            L.polyline(path, {
                color: '#2ecc71', // Green for eco-friendly paths
                weight: 5,
                dashArray: '10, 10',
                opacity: 0.8
            }).addTo(coolMap).bindPopup("🚴 Safe Cycling Route");
        });
    }

    // IMPORTANT: Fix for "Gray Map" or invisible map in dashboard tabs
    setTimeout(() => {
        coolMap.invalidateSize();
    }, 300);
}

// 3. Map Logic
function initCoolMap() {
    const userCity = localStorage.getItem('city') || 'Pune';
    const citySpots = greenAreas[userCity] || greenAreas['Pune'];

    // Initialize map only once
    if (!coolMap) {
        coolMap = L.map('coolMap').setView(citySpots[0].coords, 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(coolMap);
    } else {
        // Move map and clear markers if city changed
        coolMap.setView(citySpots[0].coords, 12);
        coolMap.eachLayer((layer) => {
            if (layer instanceof L.Marker || layer instanceof L.Polyline) {
                coolMap.removeLayer(layer);
            }
        });
    }

    // Add Markers for Green Spots
    citySpots.forEach(spot => {
        L.marker(spot.coords)
            .addTo(coolMap)
            .bindPopup(`<b>🌳 ${spot.location}</b><br>Oxygen: ${spot.oxygen}`);
    });

    // Add Cycling Paths (Dashed Blue Lines)
    if (cyclingPaths[userCity]) {
        cyclingPaths[userCity].forEach(path => {
            L.polyline(path, {
                color: '#3498db',
                weight: 5,
                dashArray: '10, 10',
                opacity: 0.8
            }).addTo(coolMap).bindPopup("🚴 Cycling Path");
        });
    }

    // CRITICAL: This fixes the "Hidden Map" visibility bug
    setTimeout(() => {
        coolMap.invalidateSize();
    }, 250);
}
function openShareForm(){
document.getElementById("shareForm").style.display="block"
}

function addResource(){

const name = document.getElementById("itemName").value
const desc = document.getElementById("itemDesc").value
const addr = document.getElementById("itemAddress").value
const phone = document.getElementById("itemPhone").value

const card = document.createElement("div")

card.className = "share-card"

card.innerHTML = `

<h3>${name}</h3>

<p>${desc}</p>

<p>📍 ${addr}</p>

<p>📞 ${phone}</p>

`

document.getElementById("resourceList").appendChild(card)

/* Clear form inputs */

document.getElementById("itemName").value = ""
document.getElementById("itemDesc").value = ""
document.getElementById("itemAddress").value = ""
document.getElementById("itemPhone").value = ""

/* Close form */

document.getElementById("shareForm").style.display = "none"

}

/* EMERGENCY CONTACTS FUNCTIONALITY */

// Emergency contacts data by city
const emergencyContacts = {
    Pune: {
        police: { number: "100", local: "+91-20-2612-2222", description: "Police Control Room" },
        ambulance: { number: "102", local: "+91-20-2612-3456", description: "Medical Emergency" },
        fire: { number: "101", local: "+91-20-2612-6789", description: "Fire Brigade" },
        disaster: { number: "108", local: "+91-20-1070", description: "Disaster Management" },
        traffic: { number: "103", local: "+91-20-2612-4567", description: "Traffic Police" },
        helpline: { number: "181", local: "+91-20-2550-1234", description: "Women Helpline" },
        utilities: { number: "1912", local: "+91-20-2612-8910", description: "Electricity Complaint" },
        animal: { number: "14410", local: "+91-20-2612-1111", description: "Animal Welfare" }
    },
    Mumbai: {
        police: { number: "100", local: "+91-22-2262-0123", description: "Police Control Room" },
        ambulance: { number: "102", local: "+91-22-2262-3456", description: "Medical Emergency" },
        fire: { number: "101", local: "+91-22-2262-6789", description: "Fire Brigade" },
        disaster: { number: "108", local: "+91-22-1070", description: "Disaster Management" },
        traffic: { number: "103", local: "+91-22-2262-4567", description: "Traffic Police" },
        helpline: { number: "181", local: "+91-22-2262-1234", description: "Women Helpline" },
        utilities: { number: "1912", local: "+91-22-2262-8910", description: "Electricity Complaint" },
        animal: { number: "14410", local: "+91-22-2262-1111", description: "Animal Welfare" }
    },
    Delhi: {
        police: { number: "100", local: "+91-11-2345-6789", description: "Police Control Room" },
        ambulance: { number: "102", local: "+91-11-2345-3456", description: "Medical Emergency" },
        fire: { number: "101", local: "+91-11-2345-6789", description: "Fire Brigade" },
        disaster: { number: "108", local: "+91-11-1070", description: "Disaster Management" },
        traffic: { number: "103", local: "+91-11-2345-4567", description: "Traffic Police" },
        helpline: { number: "181", local: "+91-11-2345-1234", description: "Women Helpline" },
        utilities: { number: "1912", local: "+91-11-2345-8910", description: "Electricity Complaint" },
        animal: { number: "14410", local: "+91-11-2345-1111", description: "Animal Welfare" }
    },
    Bangalore: {
        police: { number: "100", local: "+91-80-2294-3456", description: "Police Control Room" },
        ambulance: { number: "102", local: "+91-80-2294-3456", description: "Medical Emergency" },
        fire: { number: "101", local: "+91-80-2294-6789", description: "Fire Brigade" },
        disaster: { number: "108", local: "+91-80-1070", description: "Disaster Management" },
        traffic: { number: "103", local: "+91-80-2294-4567", description: "Traffic Police" },
        helpline: { number: "181", local: "+91-80-2294-1234", description: "Women Helpline" },
        utilities: { number: "1912", local: "+91-80-2294-8910", description: "Electricity Complaint" },
        animal: { number: "14410", local: "+91-80-2294-1111", description: "Animal Welfare" }
    }
};

// Function to populate emergency contacts
function loadEmergencyContacts() {
    const city = localStorage.getItem('city') || 'Pune';
    const contacts = emergencyContacts[city] || emergencyContacts['Pune'];
    const container = document.getElementById('emergencyContacts');

    if (!container) return;

    container.innerHTML = '';

    const contactTypes = {
        police: { icon: '👮', title: 'Police' },
        ambulance: { icon: '🚑', title: 'Medical/Ambulance' },
        fire: { icon: '🚒', title: 'Fire & Rescue' },
        disaster: { icon: '🌊', title: 'Disaster Management' },
        traffic: { icon: '🚔', title: 'Traffic Police' },
        helpline: { icon: '📞', title: 'Community Helpline' },
        utilities: { icon: '⚡', title: 'Utilities' },
        animal: { icon: '🐾', title: 'Animal Welfare' }
    };

    Object.keys(contacts).forEach(key => {
        const contact = contacts[key];
        const type = contactTypes[key];

        const card = document.createElement('div');
        card.className = 'emergency-card';

        card.innerHTML = `
            <h3>${type.icon} ${type.title}</h3>
            <p class="emergency-number">${contact.number}</p>
            <p>${contact.description}</p>
            <p>Local: ${contact.local}</p>
            <button onclick="callEmergency('${contact.number}')">Call</button>
            <button onclick="copyEmergencyNumber('${contact.local}')">Copy</button>
        `;

        container.appendChild(card);
    });
}

// Function to call emergency number
function callEmergency(number) {
    if (confirm(`Call emergency number ${number}?`)) {
        window.location.href = `tel:${number}`;
    }
}

// Function to copy emergency number
function copyEmergencyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert('Emergency number copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = number;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Emergency number copied to clipboard!');
    });
}

// Initialize emergency contacts when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load emergency contacts if on neighbour page
    if (document.getElementById('emergencyContacts')) {
        loadEmergencyContacts();
    }
});

// Update emergency contacts when city changes
window.addEventListener('cityChanged', loadEmergencyContacts);