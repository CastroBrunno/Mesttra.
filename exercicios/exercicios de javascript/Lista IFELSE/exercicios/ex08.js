var prompt = require('prompt-sync')();

var salario = parseFloat(prompt("Informe o salario: "));

var reajusteSalario = salario * 1.05;
var inss = reajusteSalario * 0.11;
var fgts = reajusteSalario * 0.08;
var descTotal = inss + fgts;
var salarioFinal = reajusteSalario - descTotal

if (reajusteSalario > 1903.98 && reajusteSalario < 2826.65) {
    let ir = reajusteSalario * 0.7;
    let salarioReal = reajusteSalario - (descTotal + ir);
    console.log(`Salario Inicial: ${salario}`);
    console.log(`Salario Reajustado: ${reajusteSalario}`);
    console.log(`Desconto 11% INSS: ${(inss).toFixed(2)}`);
    console.log(`Desconto 8% FGTS: ${(fgts).toFixed(2)}`);
    console.log(`Desconto IR: ${ir}`);
    console.log(`Tatal Descontos (INSS + FGTS + IR): ${(descTotal + ir).toFixed(2)}`);
    console.log(`Salario Final: ${(salarioReal).toFixed(2)}`);
} else if (reajusteSalario > 2826.66 && reajusteSalario < 3751.05) {
    let ir = reajusteSalario * 0.15;
    let salarioReal = reajusteSalario - (descTotal + ir);
    console.log(`Salario Inicial: ${salario}`);
    console.log(`Salario Reajustado: ${reajusteSalario}`);
    console.log(`Desconto 11% INSS: ${(inss).toFixed(2)}`);
    console.log(`Desconto 8% FGTS: ${(fgts).toFixed(2)}`);
    console.log(`Desconto IR: ${ir}`);
    console.log(`Tatal Descontos (INSS + FGTS + IR): ${(descTotal + ir).toFixed(2)}`);
    console.log(`Salario Final: ${(salarioReal).toFixed(2)}`);
} else if (reajusteSalario > 3751.06 && reajusteSalario < 4664.68) {
    let ir = reajusteSalario * 0.22;
    let salarioReal = reajusteSalario - (descTotal + ir);
    console.log(`Salario Inicial: ${salario}`);
    console.log(`Salario Reajustado: ${reajusteSalario}`);
    console.log(`Desconto 11% INSS: ${(inss).toFixed(2)}`);
    console.log(`Desconto 8% FGTS: ${(fgts).toFixed(2)}`);
    console.log(`Desconto IR: ${ir}`);
    console.log(`Tatal Descontos (INSS + FGTS + IR): ${(descTotal + ir).toFixed(2)}`);
    console.log(`Salario Final: ${(salarioReal).toFixed(2)}`);
} else if (reajusteSalario > 4664.68) {
    let ir = reajusteSalario * 0.27;
    let salarioReal = reajusteSalario - (descTotal + ir);
    console.log(`Salario Inicial: ${salario}`);
    console.log(`Salario Reajustado: ${reajusteSalario}`);
    console.log(`Desconto 11% INSS: ${(inss).toFixed(2)}`);
    console.log(`Desconto 8% FGTS: ${(fgts).toFixed(2)}`);
    console.log(`Desconto IR: ${ir}`);
    console.log(`Tatal Descontos (INSS + FGTS + IR): ${(descTotal +ir).toFixed(2)}`);
    console.log(`Salario Final: ${(salarioReal).toFixed(2)}`);
} else {
    console.log(`Salario Inicial: ${salario}`);
    console.log(`Salario Reajustado: ${reajusteSalario}`);
    console.log(`Desconto 11% INSS: ${(inss).toFixed(2)}`);
    console.log(`Desconto 8% FGTS: ${(fgts).toFixed(2)}`);
    console.log(`Tatal Descontos (INSS + FGTS): ${(descTotal).toFixed(2)}`);
    console.log(`Salario Final: ${(salarioFinal).toFixed(2)}`);
}