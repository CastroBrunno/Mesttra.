var prompt = require('prompt-sync')();

var baseMaior;
var baseMenor;
var altura;
var ladoQuadrado;
var valorLargura;
var valorAltura;
var areaCirculo;
var valorBaseTriangulo;
var valorAlturaTriangulo;

main();

function main(){
    coletaDeDados();

    trapezio(baseMaior, baseMenor, altura);
    Quadrado(ladoQuadrado);
    retangulo(valorLargura, valorAltura);
    Circulo(areaCirculo);
    Triangulo(valorBaseTriangulo, valorAlturaTriangulo);
}

function coletaDeDados() {
    console.log("..--AREA DO TRAPEZIO--..");
    baseMaior = Number(prompt("Informe o valor da base maior: "));
    baseMenor = Number(prompt("Informe o valor da base menor: "));
    altura = Number(prompt("Informe o valor da altura: "));

    console.log("..--AREA DO QUADRADO--..");
    ladoQuadrado = Number(prompt("Informe o valor de um dos lados: "));

    console.log("..--AREA DO RETANGULO--..");
    valorLargura = Number(prompt("Informe o valor da largura: "));
    valorAltura = Number(prompt("Informe o valor da altura: "));

    console.log("..--AREA DO CIRCULO--..");
    areaCirculo = Number(prompt("Informe o valor do raio: "));

    console.log("..--AREA DO TRIANGULO--..");
    valorBaseTriangulo = Number(prompt("Informe o valor da base: "));
    valorAlturaTriangulo = Number(prompt("Informe o valor da altura: "));
    console.log();
}

function trapezio(baseMaior, baseMenor, altura) {
    let area = Number(((baseMaior + baseMenor) * altura) / 2);
    console.log("Area do Trapézio: " + area.toFixed(2));
}

function Quadrado(ladoQuadrado) {
    let area = (ladoQuadrado * ladoQuadrado);
    console.log(`Area do quadrado: ${area.toFixed(2)}`);
}

function retangulo(valorLargura, valorAltura) {
    let area = (valorLargura * valorAltura);
    console.log(`Area do retangulo: ${(area).toFixed(2)}`);
}

function Circulo(areaCirculo) {
    let area = (3.14 * areaCirculo * areaCirculo);
    console.log(`Area do circulo: ${area.toFixed(2)}`);
}

function Triangulo(valorBaseTriangulo, valorAlturaTriangulo) {
    let area = (valorBaseTriangulo * valorAlturaTriangulo);
    console.log(`Area do triangulo: ${area.toFixed(2)}`);
}