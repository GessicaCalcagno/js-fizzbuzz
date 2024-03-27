 ### ESERCIZIO
 > Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 **Prima di partire a scrivere codice poniamoci qualche domanda:**
 Come faccio a sapere se un numero è divisibile senza resto per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

 ##### SVOLGIMENTO
 [x] Creo un ciclo 'for' per avere i numeri da 1 a 100;
 [x] Creo le variabili ed i calcoli nel 'if':
 FizzBuzz = (i % 3 === 0) && (i % 5 === 0) --> da inserire prima di tutte le altre condizioni al contrario non la vedremmo in pagina
 Fizz= (i %3 === 0)
 Buzz= (i %5 === 0 )

 [x] Aggiungere un elemento ad html con numero o stringa da mostrare;
 [x] Bonus: inserire lo stile in base al:
 -se Fizz= box verdeacqua; 
 -se Buzz= box giallo;
 -se FizBuzz= box rosso.