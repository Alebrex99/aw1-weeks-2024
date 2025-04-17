import sqlite from 'sqlite3';

const db = new sqlite.Database('questions.sqlite', (err) => {
  if (err) throw err;
});

let sql = 'SELECT * FROM answer';
let results = [];

//non ci sono i params: o metti arr vuoto o non lo metti
db.all(sql, [], (err, rows) => {
  if(err) throw err;
  for (let row of rows)
    // console.log(row);
    results.push(row);
});

//ATTENZIONE: la lettura da database è asincrona, il for sarà eseguito prima che RESULTS sia riempito, quindi 
//non vedrai i risultati. Per questo motivo, il console.log è dentro la callback di db.all
console.log('*****');
for (let r of results)
  console.log(r);

