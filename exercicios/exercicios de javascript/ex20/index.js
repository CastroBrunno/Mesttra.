valor = prompt('Digite o valor: ')

console.log("Milhares: " + (parseInt(valor/1000)));
valor = valor%1000;

console.log("Centenas: " + (parseInt(valor/100)));
valor = valor%100;

console.log("Dezenas: " + (parseInt(valor/10)));
valor = valor%10;

console.log(`Unidades: ${valor}`);