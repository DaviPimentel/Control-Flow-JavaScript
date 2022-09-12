const prompt = require('prompt-sync')()

const n1 = parseInt(prompt('Type Number 1: '))
const n2 = parseInt(prompt('Type Number 2: '))
const n3 = parseInt(prompt('Type Number 3: '))

if(n1 > n2) {
    
    if(n1 > n3)
    console.log(`The biggest number is: ${n1}`)
}
 if(n2 > n1){

    if(n2 > n3)

    console.log(`The biggest number is: ${n2}`)
}
if(n3 > n1) {

    if(n3 > n2)

    console.log(`The biggest number is: ${n3}`)
}