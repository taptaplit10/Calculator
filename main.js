alert("DO NOT COPY")

let S = document.getElementById('Su');
let A = document.getElementById('Ad');
let D = document.getElementById('Di');
let M = document.getElementById('Multi');
let display = document.getElementById('display');



Di.addEventListener('click', calculate);
Multi.addEventListener('click', calculat);
Ad.addEventListener('click', calcula);
Su.addEventListener('click', calcul);


function calculate(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill/finalill;
  display.innerHTML = answer;
  
}






function calculat(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill*finalill;
  display.innerHTML = answer;
  
}




function calcula(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill+finalill;
  display.innerHTML = answer;
  
}







function calcul(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill-finalill;
  display.innerHTML = answer;
  
}

