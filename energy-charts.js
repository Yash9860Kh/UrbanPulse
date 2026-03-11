document.addEventListener("DOMContentLoaded", function(){

const energyChart = new Chart(
document.getElementById("energyChart"),
{
type:"doughnut",

data:{
labels:["Solar","Wind","Hydro","Thermal"],

datasets:[{
data:[35,20,15,30],

backgroundColor:[
"#22c55e",
"#4ade80",
"#16a34a",
"#15803d"
],

borderWidth:0
}]
},

options:{
responsive:true,

plugins:{
legend:{
labels:{
color:"white"
}
}
},

animation:{
animateScale:true,
duration:2000
}

}

}
);




const waterChart = new Chart(
document.getElementById("waterChart"),
{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Water Usage (ML)",

data:[320,340,310,350,360,330,300],

borderColor:"#4ade80",

backgroundColor:"rgba(34,197,94,0.2)",

tension:0.4,

fill:true

}]

},

options:{

plugins:{
legend:{
labels:{color:"white"}
}
},

scales:{
x:{ticks:{color:"white"}},
y:{ticks:{color:"white"}}
},

animation:{
duration:2000
}

}

}
);




const wasteChart = new Chart(
document.getElementById("wasteChart"),
{

type:"bar",

data:{

labels:["Generated","Recycled","Landfill"],

datasets:[{

label:"Waste (tons)",

data:[1800,620,900],

backgroundColor:[
"#22c55e",
"#4ade80",
"#15803d"
]

}]

},

options:{
responsive:true,

animation:{
duration:2000,
easing:'easeOutQuart'
},

plugins:{
legend:{
labels:{
color:'white',
font:{size:14}
}
}
}

}

}
);

});
