// Funzione che stampa in CONSOLE i valori di un OGGETTO inserito.
function stampaProprietàOggetto (InserisciOggetto) {
    for (var chiave in InserisciOggetto) {
    
        console.log(InserisciOggetto[chiave]);
    }
}