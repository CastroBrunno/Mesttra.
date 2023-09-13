var prompt = require('prompt-sync')();

let diferencaMetragem;
let diferencaFrente;
let valorFinal;
let areaTotalTerreno;

let frente = parseFloat(prompt("Insira o valor da frente do terreno: "));
let lateral = parseFloat(prompt("Insira o valor da lateral do terreno: "));
let valorMetroQuadrado = parseFloat(prompt("Informe o valor do metro quadrado: "));

areaTotalTerreno = frente * lateral
diferencaMetragem = Math.abs ((frente - lateral) / lateral) * 100; //((frente - lateral) / lateral) * 100;
diferencaFrente = Math.abs((frente * 100) / lateral).toFixed(0);
valorFinal = areaTotalTerreno * valorMetroQuadrado;
//console.log(diferencaFrente);

if(diferencaMetragem < 10) {
    valorFinal = (valorFinal * 1.22).toFixed(2);
    console.log(`Area total do terreno de ${frente} mts de frente, com ${lateral} mts de lateral é de: ${areaTotalTerreno}`);
    console.log(`O terreno recebeu um acrescimo de 22% e custara: R$ ${valorFinal}`);
}else if (diferencaFrente < 40) {
    valorFinal = (valorFinal / 0.12) - valorFinal;
    console.log(`Area total do terreno de ${frente} mts de frente, com ${lateral} mts de lateral é de: ${areaTotalTerreno}`);
    console.log(`O terreno recebeu um decrescimo de 12% e custara: R$ ${valorFinal}`);
} else if (diferencaFrente > 70 ) {
    valorFinal = valorFinal * 0.15;
    console.log(`Area total do terreno de ${frente} mts de frente, com ${lateral} mts de lateral é de: ${areaTotalTerreno}`);
    console.log(`O terreno recebeu um decrescimo de 15% e custara: R$ ${valorFinal}`);
} else {
    console.log(`Area total do terreno de ${frente} mts de frente, com ${lateral} mts de lateral é de: ${areaTotalTerreno}`);
    console.log(`O terreno não recebeu nenhuma alteração e custará: R$ ${valorFinal}`);
}