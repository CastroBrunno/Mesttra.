var prompt = require('prompt-sync')();

let salarioMin = parseFloat(prompt("Informe o valor do salario minimo: "))
let salarioFuncionario = parseFloat(prompt("Informe o valor do salario do funcionario: "))
let media = (salarioFuncionario / salarioMin).toFixed(2)

if(salarioFuncionario < salarioMin) {
    console.log("O funcionario recebe menos que um salario minimo!")
} else {
    console.log(`O funcionario recebe equivalente ${media} salarios minimos`)
}
