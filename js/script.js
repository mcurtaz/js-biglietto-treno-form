// creo variabili di supporto

var costoKm = 0.21;

// serie di istruzioni sul click su crea biglietto

document.getElementById("btnCrea").addEventListener("click", function(){

  // creo variabili con dati dal form

  var nomeCompleto = document.getElementById("nome").value + " " + document.getElementById("cognome").value;

  console.log(nomeCompleto);

  var km = document.getElementById("km").value;

  console.log(km);

  var riduzione = document.getElementById("riduzione").value;

  console.log(riduzione);

  // calcolo prezzo biglietto
  if (riduzione == "minori") {
    // se l'utente ha selezionato minori di 18 il prezzo è totale per 0.8 cioè l'80% del totale (sconto 20%)
    var prezzoBiglietto = km * costoKm * 0.8;
  } else if (riduzione == "senior"){
    // se l'utente ha selezionato senior il prezzo è totale per 0.6 cioè il 60% del totale (sconto 40%)
    var prezzoBiglietto = km * costoKm * 0.6;
  } else {
    // se non c'è riduzione il prezzo è semplicemente km * costo al kilometro
    var prezzoBiglietto = km * costoKm;
  }

  console.log(prezzoBiglietto);

});
