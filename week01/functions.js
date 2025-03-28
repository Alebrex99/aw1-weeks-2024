'use strict';

// constructor function
function Movie(title, genre, duration, director) {
  this.title = title;
  this.genre = genre;
  this.duration = duration;
  this.director = director;
  this.isLong = () => this.duration > 120; //metodo
}

let titanic = new Movie('Titanic', 'drama', 200, 'Cameron');
console.log(titanic.isLong());
console.log(titanic.isLong2());


titanic.function2 = function() {
  console.log('function2');
}
console.log(titanic);



//funzioni
let f = function () {
  console.log('Hello');
}
let f_name = function f_name() {
  console.log('Hello');
}
let g = () => console.log('Hello');

