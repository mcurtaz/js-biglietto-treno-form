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
});
