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
const coolMap = L.map('coolMap').setView([18.5204,73.8567],12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(coolMap);

const greenSpots=[

{name:"Saras Baug",coords:[18.5016,73.8545]},
{name:"Pashan Lake",coords:[18.5400,73.7870]},
{name:"Empress Garden",coords:[18.5007,73.8777]}

]

greenSpots.forEach(spot=>{

L.marker(spot.coords)
.addTo(coolMap)
.bindPopup("🌳 "+spot.name)

})
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
