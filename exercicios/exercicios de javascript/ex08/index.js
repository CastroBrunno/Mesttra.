//var salario = Number(prompt("Informe o salario: "));
var salario = 1200;

var reajusteSalario = salario * 1.15;
var inss = reajusteSalario * 0.11;
var fgts = reajusteSalario * 0.08;
var descTotal = inss + fgts;

console.log(`Salario Inicial: ${salario}`);
console.log(`Salario Reajustado: ${reajusteSalario}`);
console.log(`Desconto 11% INSS: ${inss}`);
console.log(`Desconto 8% FGTS: ${fgts}`);
console.log(`Tatal Descontos (INSS + FGTS): ${descTotal}`);
console.log(`Salario Final: ${reajusteSalario - descTotal}`);