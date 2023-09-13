var cavalos = Number(prompt("Digite a quantidade de cavalos: "));
var valorFerradura = Number(prompt("Digite o valor de cada ferradura: "));
var totalFerradura = (cavalos * 4);

var valorTotal = totalFerradura * valorFerradura;

console.log(`Serão necessarias ${totalFerradura} ferraduras`);
console.log(`Para equipar todos os cavalos serão preciso : R$ ${(valorTotal).toFixed(2)}`);