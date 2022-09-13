const prompt = require('prompt-sync')();

const number = parseInt(prompt('Type the number '));

if(number % 2 == 0) {

    number = Math.sqrt(number,2)
     console.log('Par')
} else {
    
    number = Math.pow(number,2)
    console.log('Impar')
}