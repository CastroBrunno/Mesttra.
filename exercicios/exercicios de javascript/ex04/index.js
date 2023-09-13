//var numero = prompt("Digite o numero para o calculo da tabuada: ");
var numero = 5;
for (var mais = 0; mais < 10; mais++) {
    console.log(`${numero} + ${mais}: ${numero+mais}`);
}
console.log("\n");
for (var menos = 0; menos < 10; menos++) {
    console.log(`${numero} - ${menos}: ${numero-menos}`);
}
console.log("\n");
for (var mult = 0; mult < 10; mult++) {
    console.log(`${numero} x ${mult}: ${numero*mult}`);
}
console.log("\n");
for (var div = 0; div < 10; div++) {
    console.log(`${numero} / ${div}: ${numero/div}`);
}