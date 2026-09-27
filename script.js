const cars=[
 {name:"BMW M4",type:"Sport",info:"3.0L Turbo • 510 HP",icon:"🏎️"},
 {name:"Mercedes-AMG GT",type:"Premium",info:"4.0L V8 • 585 HP",icon:"🚘"},
 {name:"Toyota Supra",type:"Sport",info:"3.0L Turbo • 387 HP",icon:"🏁"},
 {name:"Chevrolet Camaro",type:"Muscle",info:"6.2L V8 • 455 HP",icon:"🚗"},
 {name:"Porsche 911",type:"Sport",info:"3.0L Turbo • 394 HP",icon:"🏎️"},
 {name:"Tesla Model 3",type:"Electric",info:"Dual Motor • 460 HP",icon:"⚡"}
];
const grid=document.getElementById("carGrid");
function render(list=cars){
 grid.innerHTML=list.map(c=>`<article class="car-card"><div class="car-image">${c.icon}</div><div class="car-info"><h3>${c.name}</h3><p>${c.info}</p><span class="tag">${c.type}</span></div></article>`).join("");
}
render();
document.getElementById("search").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase();
 render(cars.filter(c=>(c.name+" "+c.type+" "+c.info).toLowerCase().includes(q)));
});
document.getElementById("themeBtn").addEventListener("click",()=>{
 document.body.classList.toggle("light");
 document.getElementById("themeBtn").textContent=document.body.classList.contains("light")?"☀":"☾";
});
