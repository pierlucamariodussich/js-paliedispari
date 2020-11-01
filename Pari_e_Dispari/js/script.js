/*Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/



var computerInput = randomNumber(1,6);
var userInput = parseInt(document.getElementById("number").value);
var pariDispari = document.getElementById("pari_dispari").value;
var somma = somma( userInput, computerInput);
var finalResult = pariODispari(somma);
var result = document.getElementById("result");
btnSubmit = document.getElementById("submit");


console.log(computerInput);
console.log(userInput);
console.log(pariDispari)
console.log(somma);
console.log(finalResult);

//DICHIARIAMO CHI HA vinto


  if ( pariDispari === finalResult){
    result.innerHTML = " You Win!";
    result.style.color = "green";
  } else {
    result.innerHTML = "You Loose";
    result.style.color = "red";
  }






//funzioni

// generare un numero random in un range 1 a 5

function randomNumber(min, max){
     var random = (Math.floor((Math.random() * (max - min) + min)));
     return random;
}

// funzione somma anche se esite già +++++++++

function somma(a, b){
  var add = a + b;
  return add;
}


/*funzione che stabvilisce se la somma dei due numeri è pari
o dispari (usando una funzione)*/

function pariODispari (numero){
  if (!(numero%2)){
    numero = "pari";
  } else {
    numero = "dispari";
  }
  return numero;
}
