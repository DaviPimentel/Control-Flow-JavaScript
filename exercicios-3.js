const prompt = require('prompt-sync')()

const age = parseInt(prompt('Type your age: '))

if(age >= 10 && age <=14) {

    console.log(`Child`)
}
else if(age >= 15 && age<=17){

    console.log(`Teenager`)
}
else if(age >=18 && age <=25){

    console.log(`Adult`)
}