
// inizio funzione

function palinDrome() {

   var word = prompt(""); //inserisco parola
   var drow = ""; //creo variabile parola al contrario

   /* inizio un ciclo for :
   - imposto l'inizio dal (numero
   dei caratteri della parola meno uno)
   (es.anna = 4-1 =3) poi imposto la decrescita
   con i-- quindi il ciclo mi genera il valore di i in:
   3 , 2, 1, 0 */
   for (i = word.length - 1; i >= 0; i--) {
   console.log(i); //Controllo il funzionamento del ciclo
   /* la variabile drow contrario di word sarà uguale alla
    concatenazione delle singole unità della stringa
    selezionate all'ineverso */
   drow += word.charAt(i);

   }
   /* se la parola inserita è identica alla parola
   al contrario allora è palindroma se no non lo è */
   if (word === drow) {
      document.getElementById("result").innerHTML = word + " is a palindrome";
   }
   else {
      document.getElementById("result").innerHTML = word + " is not a palindrome";
   }

}

  //avvio la funzione
 palinDrome();
