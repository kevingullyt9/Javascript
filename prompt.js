var prompt = require('prompt-sync')();

var fistName = prompt('Digite seu nome: ')
var lastName = prompt('Digite seu sobrenome: ')

var fullName = fistName + " " + lastName

console.log(`Ola ${fullName}`)