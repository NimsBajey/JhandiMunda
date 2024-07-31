
let called = false;
export function call(){

 called = true;
      setTimeout(()=> called = false, 200);
    
}

export const playerIds = [
  { id: "nims2024", name: "nirmal" },
  { id: 2, name: "mith" },
  
];


let counts = [0, 0, 5, 0, 0, 0];
let dicer = [7, 7, 7, 7, 7, 7];
var clss = document.getElementsByClassName('add');
var show = document.getElementsByClassName('bett').innerHTML;

// clss.addEventListener("click", ()=> addItem);
export function addItem(index) {
  const newArray = [...counts];
  newArray[index] += 2;
  counts = newArray;
  show = counts[1];
  console.log(show);
  return counts;
}

export function subItem(index) {
    const newArray = [...counts];
    newArray[index] += 2;
    counts = newArray;
    return newArray;
  }

 function rOllIt(){
    const newArray = []; 
    for (let i = 0; i < 6; i++) {
      newArray.push(Math.floor(Math.random() * 6) + 1); 
    }
    dicer = newArray; 
    
  }

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}




