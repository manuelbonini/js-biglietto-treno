// prezzo al km 
var prezzoKm = 0.21;

// chiede km alla prima persona
var kmUtenteUno = parseInt( prompt('Quanti km devi percorrere:') );
// chiede età alla prima persona
var etaUtenteUno = prompt('Qual è la tua età:');
// prezzo totale
var prezzoTotaleUno = kmUtenteUno * prezzoKm;

if(etaUtenteUno > 65) {
    var percentUno = prezzoTotaleUno * 40 / 100;
    var prezzoScontatoUno = prezzoTotaleUno - percentUno;
    document.getElementById('biglietto-1').innerHTML = 'Il prezzo da pagare della prima persopne è: ' + prezzoScontatoUno.toFixed( 2 );
} else if(etaUtenteUno < 18) {
    var percentUno = prezzoTotaleUno * 20 / 100;
    var prezzoScontatoUno = prezzoTotaleUno - percentUno;
    document.getElementById('biglietto-1').innerHTML = 'Il prezzo da pagare della prima persopne è: ' + prezzoScontatoUno.toFixed( 2 ) + '€';
} else {
    document.getElementById('biglietto-1').innerHTML = 'Il prezzo da pagare della prima persopne è: ' + prezzoTotaleUno.toFixed( 2 ) + '€';
}


// chiede km alla seconda persona
var kmUtenteDue = prompt('Quanti km devi percorrere:');
// chiede età alla seconda persona
var etaUtenteDue = prompt('Qual è la tua età:');
// prezzo totale
var prezzoTotaleDue = kmUtenteDue * prezzoKm;

if(etaUtenteDue > 65) {
    var percentDue = prezzoTotaleDue * 40 / 100;
    var prezzoScontatoDue = prezzoTotaleDue - percentDue;
    document.getElementById('biglietto-2').innerHTML = 'Il prezzo da pagare della seconda persopne è: ' + prezzoScontatoDue.toFixed( 2 ) + '€';
} else if(etaUtenteDue < 18) {
    var percentDue = prezzoTotaleDue * 20 / 100;
    var prezzoScontatoDue = prezzoTotaleDue - percentDue;
    document.getElementById('biglietto-2').innerHTML = 'Il prezzo da pagare della seconda persopne è: ' + prezzoScontatoDue.toFixed( 2 ) + '€';
} else {
    document.getElementById('biglietto-2').innerHTML = 'Il prezzo da pagare della seconda persopne è: ' + prezzoTotaleDue.toFixed( 2 ) + '€';
}