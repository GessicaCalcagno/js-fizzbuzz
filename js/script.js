// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
"use strict";
//**************************************************** */

//La inserisco fuori dal ciclo for dopo i vari controlli/test console
//Prendo la riga creata in HTML tramite classe '.row'
const rowElem = document.querySelector(".row");
//test
console.log(rowElem);
//--------------------------------------------

// CICLO 'FOR'
// Inizializzazione - condizione - incremento (i++ -> i= i+1)
for (let i = 1; i <= 100; i++) {
    //console.log(i)

    //Dopo che ho fatto tutti i controlli in console
    //Dichiaro la variabile per cambiare il background-color in base al tipo di elemento
    let bgClass;

    // Creo i div in pagina
    const boxElem = document.createElement("div");
    //Test
    console.log(boxElem);
    //------------------------------------


    //Creo la condizione che i box numerici diventino Fizz--> se divisibili per 3; Buzz-> /5; FizzBuzz--> /sia per 5 che per 3

    //Essendo a 'cascata' prima devo inserire la condizione per entrambi i casi cioè 'FizzBuzz' se no mi indica solo fizz e buzz senza fizzBuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
        // Test
        console.log("FizzBuzz");
        // Dopo aver creato in css la classe dico alla variabile 'bgClass' di prendere la classe dall'html
        bgClass = "fizz-buzz";
        //Stampo nell'elemento box il termine di riferimento. Assegno il termine 'FizzBuzz' nel template litteral per vederlo scritto in pagina
        boxElem.innerHTML = `FizzBuzz`;

        // Indico la condizione: se un numero: i è un multiplo di 3 allora è 'Fizz'
    } else if (i % 3 === 0) {
        // Test
        console.log("Fizz");
        // Dopo aver creato in css la classe dico alla variabile 'bgClass' di prendere la classe dall'html con background-color 
        bgClass = "fizz"
        //Stampo nell'elemento box il termine di riferimento. Assegno il termine 'Fizz' nel template litteral per vederlo scritto in pagina
        boxElem.innerHTML = `Fizz`;


        // Indico la condizione: se un numero: i è un multiplo di 5 allora è 'Buzz'
    } else if (i % 5 === 0) {
        // Test
        console.log("Buzz");
        // Dopo aver creato in css la classe dico alla variabile 'bgClass' di prendere la classe dall'html con background-color
        bgClass = "buzz"
        //Stampo nell'elemento box il termine di riferimento. Assegno il termine 'Buzz' nel template litteral per vederlo scritto in pagina
        boxElem.innerHTML = `Buzz`;


        // Indico la condizione per la quale tutti gli altri numeri sia semplicemente scritti come un numero ma ricorda che è una STRINGA
    } else { // Se non trova nessuna delle condizioni precedenti
        console.log("number")
        // Prendo la classe creata in css per il background e la indico nella variabile 'bgClass' per il background-color
        bgClass = "number"

        ////Stampo nell'elemento box il termine di riferimento. 
        //Assegno 'i' che è una variabile che viene utilizzata comunemente come contatore in cicli o iterazioni
        boxElem.innerHTML = i;

    }


    // Aggiungo rowElem come contenitore (che contiene  i div con i numeri) di boxElem (il singolo div)
    //Il metodo append() viene utilizzato per aggiungere uno o più elementi, testo o object DOM come figli dell'elemento su cui viene chiamato
    rowElem.append(boxElem);

    // Aggiungo la classe "box" al div padre per creare i vari box con i numeri e condizioni
    boxElem.classList.add("box");

    // Aggiungo la variabile "bgClass" al div di ogni singolo item per impostare il colore di background
    boxElem.classList.add(bgClass);

    //const boxElem = `<div class="box ${bgClass}"> ${i}</div>`
   // console.log(boxElem);
    //rowElem.innerHTML += boxElem

}
