
let vards ="Jānis";
console.log(vards);


x = 4;
y = 4;
z = 7;
alert(x);

prompt("Ievadi savu vārdu!");

if ( x >= y && y>z) {
alert("X ir lielāks par Y un Y ir lielāks par Z")
  
}
else if (y>x) {
alert("Y ir lielāks par X")
  
}
else if (x>z){
  alert("X ir lielāks par Z")
}

else if (z>x){
  alert ("Z ir lielaks par X")
}
else if (z>y){

  alert ("Z ir lielāks par Y")
}
function h1izveide(){
  
let virsraksts = document.createElement("h1");
virsraksts.innerHTML = "Te ir virsraksts.";
document.body.appendChild(virsraksts);
virsraksts.style.color = "red";
}
function cipari () {
for (i=1; i<5; i++){
  console.log(i);
}
}
function rakstit(){
  for (i=1; i<6; i++){
    let rindkopa = document.createElement("p");
      rindkopa.innerHTML =" Ši ir  " + i + ". rindkopa.";
        document.body.appendChild(rindkopa);
  }
}
function vardosana(){
  let name = prompt("Ievadi vārdu:")
let skaits = prompt("Ievadi skaitli:")
   for (i=0; i<skaits; i++){
     let rindkopa = document.createElement("p");
   rindkopa.innerHTML =" Mani sauc  " + name + ". skaits.";
     document.body.appendChild(rindkopa);
   }
}