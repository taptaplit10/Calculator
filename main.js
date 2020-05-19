alert("DO NOT COPY")

let S = document.getElementById('Su');
let A = document.getElementById('Ad');
let D = document.getElementById('Di');
let M = document.getElementById('Multi');
let display = document.getElementById('answerdisplay');



D.addEventListener('click', calculate);
M.addEventListener('click', calculat);
A.addEventListener('click', calcula);
S.addEventListener('click', calcul);


function calculate(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill/finalill;
  answerdisplay.innerHTML = answer;
  
}






function calculat(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill*finalill;
  answerdisplay.innerHTML = answer;
  
}




function calcula(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill+finalill;
  answerdisplay.innerHTML = answer;
  
}







function calcul(){
  let bill = document.getElementById('1number').value;
  let finalBill = Number(bill)
  let ill = document.getElementById('2number').value;
  let finalill = Number(ill)
  let answer = finalBill-finalill;
  answerdisplay.innerHTML = answer;
  
}

