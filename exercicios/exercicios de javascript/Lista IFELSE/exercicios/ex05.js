var prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Informe o primeiro numero: "))
let num2 = parseInt(prompt("Informe o segundo numero: "))

if (num1 == 0 || num2 == 0) {
    console.log("A operação não pode ser realizada, coloque um numero diferente de '0'")
} else if (num1 > num2) {
    let result = (num1 / num2).toFixed(2)
    console.log(result)
}else if (num2 > num1) {
    let result = (num2 / num1).toFixed(2)
    console.log(result)
}