// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome: "Alessandro",
    cognome: "Sestili",
    età: 24,
}

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
stampaProprietàOggetto(studente);

// Creare un array di oggetti di studenti.
var classe33 = [{
    nome: "Maurizio",
    cognome: "Conni",
    età: 23,
}, {
    nome: "Stefano",
    cognome: "Laurenzi",
    età: 28,
}, {
    nome: "Gaetano",
    cognome: "Castrovilli",
    età: 19,
}]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < classe33.length; i++) {

    // Stampa per ogni studente nome e cognome
    stampaProprietàOggetto(classe33[i]);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
classe33.push({});

// Chiedo all'utente
var nomeUtente = prompt("Inserisci il tuo nome: ")
var cognomeUtente = prompt("Inserisci il tuo cognome: ")
var etàUtente = prompt("Inserisci la tua età: ")

// Aggiungo all'Array classe33 i dati inseriti dall'Utente
classe33[3] = {
    'nome': nomeUtente,
    'cognome': cognomeUtente,
    'età': etàUtente
}

console.log(classe33);
console.log(classe33[3]);








