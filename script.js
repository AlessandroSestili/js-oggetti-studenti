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

// Chiedi all'Utente se vuole aggiungere uno studente 
var sceltaUtente = prompt("Vuoi entrare in classe? Scrivi si o no.").toLowerCase();

if (sceltaUtente === "si") {

    // Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    classe33.push({});

    // Chiedo all'utente

    var check1 = true;
    while (check1) {
        var nomeUtente = prompt("Inserisci il tuo nome: ").toLowerCase();

        if (isNaN(nomeUtente)) {
            
            check1 = false;
        } else {
            alert("Da quando gli umani usano numeri nei nomi?")
        }
    }

    var check2 = true;
    while (check2) {
        var cognomeUtente = prompt("Inserisci il tuo cognome: ").toLowerCase();

        if (isNaN(cognomeUtente)) {
            check2 = false;
        } else {
            alert("Sei per caso il figlio di Elon Musk?")
        }
    }

    var check3 = true;
    while (check3) {
        var etàUtente = parseInt(prompt("Inserisci la tua età: "));

        if (!Number.isNaN(etàUtente)) {
            check3 = false;
        } else {
            alert("Inserisci la tua età. Non fregare!")
        }
    }

    // Aggiungo all'Array classe33 i dati inseriti dall'Utente
    classe33[3] = {
        'nome': nomeUtente,
        'cognome': cognomeUtente,
        'età': etàUtente
    }

    console.log("Questi sono tutti i tuoi compagni ", classe33);
    console.log("E questo sei tu... ", classe33[3]);

} else if (sceltaUtente == "no") {

    alert("Va bè fa niente...")

    console.log("Non sbirciare, ti vedo!");

} else {
    alert("Sono una macchina, capisco solo si o no. 😅")

    console.log("Umano, cosa stai facendo ancora qui?");
}











