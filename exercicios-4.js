const prompt = require('prompt-sync')();

const number = parseInt(prompt('Type the number '));

if(number % 2 == 0) {
     console.log('Par')
} else {
    console.log('Impar')
}