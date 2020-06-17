// creo variabili di supporto

var costoKm = 0.21;

// serie di istruzioni sul click su crea biglietto

document.getElementById("btnCrea").addEventListener("click", function(){

  // creo variabili con dati dal form

  var nomeCompleto = document.getElementById("nome").value + " " + document.getElementById("cognome").value;

  console.log(nomeCompleto);

  var km = document.getElementById("km").value;

  console.log(km);

  var riduzione = document.getElementById("sconto").value;

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

  // creo variabili numero treno (tra 90000 e 99999)  e numero numeroCarrozza (tra 1 e 12)

  var numeroTreno = Math.floor(Math.random() * (99999 - 90000 + 1) + 90000);

  var numeroCarrozza = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  // stampo Biglietto

  document.getElementById("nomeCompleto").innerHTML = nomeCompleto;

  document.getElementById("numeroTreno").innerHTML = numeroTreno;

  document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;

  document.getElementById("riduzione").innerHTML = riduzione;

  document.getElementById("prezzoBiglietto").innerHTML = prezzoBiglietto.toFixed(2);

// applico classe show per effetto transizione sull'opacità

  document.getElementById("nomeCompleto").className = "show";

  document.getElementById("numeroTreno").className = "show";

  document.getElementById("numeroCarrozza").className = "show";

  document.getElementById("riduzione").className = "show";

  document.getElementById("prezzoBiglietto").className = "show";
});


// istruzione su click su bottone Annulla

document.getElementById("btnAnnulla").addEventListener("click", function(){

  // al biglietto tolgo classe show e metto classe hidden

  document.getElementById("nomeCompleto").classList.remove("show");

  document.getElementById("numeroTreno").classList.remove("show");

  document.getElementById("numeroCarrozza").classList.remove("show");

  document.getElementById("riduzione").classList.remove("show");

  document.getElementById("prezzoBiglietto").classList.remove("show");

  document.getElementById("nomeCompleto").classList.add("hidden");

  document.getElementById("numeroTreno").classList.add("hidden");

  document.getElementById("numeroCarrozza").classList.add("hidden");

  document.getElementById("riduzione").classList.add("hidden");

  document.getElementById("prezzoBiglietto").classList.add("hidden");

  // svuoto il form

  document.getElementById("nome").value = "";

  document.getElementById("cognome").value = "";

  document.getElementById("km").value = "";

  document.getElementById("sconto").value = "nessuna";
});
