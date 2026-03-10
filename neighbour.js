function openModule(id){

document.querySelectorAll(".content-card")
.forEach(card=>card.classList.remove("active"))

document.querySelectorAll(".menu-item")
.forEach(item=>item.classList.remove("active"))

document.getElementById(id).classList.add("active")

event.currentTarget.classList.add("active")

}