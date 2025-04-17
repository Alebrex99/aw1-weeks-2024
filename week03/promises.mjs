// Esempio di Promise (produttore)
const esempioPromise = new Promise((resolve, reject) => {
    let val = Math.random(); // Simula un valore casuale
    const successo = val > 0.5; // Simula un'operazione con successo casuale
    setTimeout(() => {
        if (successo) {
            resolve("Operazione completata con successo! " + val);
        } else {
            reject("Si è verificato un errore durante l'operazione. " + val);
        }
    }, 1000); // Simula un ritardo di 1 secondo
});

// Consumatori con then e catch
esempioPromise
    .then((risultato) => {
        console.log("Successo:", risultato);
    })
    .catch((errore) => {
        console.error("Errore:", errore);
    });