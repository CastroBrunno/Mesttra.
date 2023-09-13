var prompt = require('prompt-sync')();

let operador = String(prompt("Informe a operação desejada [+,-,*,/]: "))
let numero = parseInt(prompt("Informe o numero para o calculo da tabuada: "))

if (operador == '+') {
    for (let i = 0; i < 10; i++) {
        console.log(`${numero} + ${i}: ${numero+i}`);
    }
} else if (operador == '-'){
    for (let i = 0; i < 10; i++) {
        console.log(`${numero} - ${i}: ${numero-i}`);
    }
} else if(operador == '*'){
    for (let i = 0; i < 10; i++) {
        console.log(`${numero} * ${i}: ${numero*i}`);
    }
} else if(operador == '/') {
    for (let i = 0; i < 10; i++) {
        console.log(`${numero} / ${i}: ${Math.round(numero/i)}`);
    }
} else {
    console.log(`Operacao digitada (${operador}) incorreta!`)
}