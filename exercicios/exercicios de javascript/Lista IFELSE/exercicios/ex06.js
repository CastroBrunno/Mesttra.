var prompt = require('prompt-sync')();

let quantCavalos = parseInt(prompt("Informe a quantidade de cavalos: "))
let valorFerradura = Number(prompt("Informe o valor de cada ferradura: : "))
let qtdeFerraduras = quantCavalos * 4
let valorFinal = parseFloat((qtdeFerraduras * valorFerradura)).toFixed(2)

if (valorFinal < 15000.01) {
    console.log("Sem desconto!")
    console.log(`A quantidade de ferraduras necessarias: ${qtdeFerraduras}`)
    console.log(`Valor total para a compra das ferraduras: ${valorFinal}`)
} else if(valorFinal >= 15000.01 && valorFinal <= 20000.00) {
    valor = Math.abs((valorFinal * 0.10) - valorFinal).toFixed(2)
    console.log(`A quantidade de ferraduras necessarias: ${qtdeFerraduras}`)
    console.log(`Valor total para a compra das ferraduras: ${valor}`)
} else if(valorFinal >= 20000.01 && valorFinal <= 25000.00) {
    valor = Math.abs((valorFinal * 0.12)  - valorFinal).toFixed(2)
    console.log(`A quantidade de ferraduras necessarias: ${qtdeFerraduras}`)
    console.log(`Valor total para a compra das ferraduras: ${valor}`)
} else if (valorFinal >= 25000.01 && valorFinal <= 30000.00) {
    valor = Math.abs((valorFinal * 0.15)  - valorFinal).toFixed(2)
    console.log(`A quantidade de ferraduras necessarias: ${qtdeFerraduras}`)
    console.log(`Valor total para a compra das ferraduras: ${valor}`)
} else {
    valor = Math.abs((valorFinal * 0.20)  - valorFinal).toFixed(2)
    console.log(`A quantidade de ferraduras necessarias: ${qtdeFerraduras}`)
    console.log(`Valor total para a compra das ferraduras: ${valor}`)
}