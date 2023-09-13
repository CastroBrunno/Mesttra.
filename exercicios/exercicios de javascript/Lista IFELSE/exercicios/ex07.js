var prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Insira o seu peso: "))

let peso15 = parseFloat(peso * 1.15).toFixed(2)
console.log(`Caso a pessoa engorde 15% ficara com: ${peso15} KG`)

let peso20 = parseFloat(peso * 1.2).toFixed(2)
console.log(`Caso a pessoa engorde 20% ficara com: ${peso20} KG`)

let diferenca = Math.abs(peso15 - peso20)

if(diferenca >= 4.5) {
    console.log("Voce deve procurar um nutricionista!")
}
