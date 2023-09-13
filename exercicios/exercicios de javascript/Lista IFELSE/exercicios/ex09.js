var prompt = require('prompt-sync')();

var valorConta = Number(prompt("Qual o valor da conta?"));
var valorDividido = valorConta / 3;
var centavos = Math.abs((valorDividido - Math.round(valorDividido)).toFixed(2));

if(centavos >= 0.30){
    console.log(`Carlos pagará: ${(valorDividido).toFixed(2)}`);
    console.log(`Andre pagará: ${(valorDividido).toFixed(2)}`);
    console.log(`Felipe pagará: ${(valorDividido).toFixed(2)}`);
} else {
    console.log(`Carlos pagará: ${(valorDividido - centavos).toFixed(2)}`);
    console.log(`Andre pagará: ${(valorDividido - centavos).toFixed(2)}`);
    console.log(`Felipe pagará: ${(valorDividido + (centavos * 2)).toFixed(2)}`);
}