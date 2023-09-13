main()

function main() {
    let baseMaior;
    let baseMenor;
    let altura;
    let lateral;
    let base;
    let raio;
    
    //Cálculo da Área do Trapézio
    console.log("== Cálculo da Área do Trapézio ==");
    
    baseMaior = getFloatNumber("Digite o valor da base maior: ");
    baseMenor = getFloatNumber("Digite o valor da base menor: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    //////////uso de funcao que nao retorna valor
    calcularAreaTrapezio(baseMaior, baseMenor, altura); 
    
    //Cálculo da Área do Quadrado
    
    console.log("== Cálculo da Área do Quadrado ==");
    lateral = getFloatNumber("Digite o valor de um dos lados: ")
    
    /////////uso de funcao que retorna valor
    calcularAreaQuadrado(lateral);
  
    //Cálculo da Área do Retângulo
    console.log("== Cálculo da Área do Retângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    console.log("Área do Retângulo: " + (base * altura).toFixed(2));
    
    //Cálculo da Área do Círculo
    console.log("== Cálculo da Área do Círculo ==");
    raio = getFloatNumber("Digite o valor do raio: ");
    
    calcularAreaCirculo(raio)
    
    //Cálculo da Área do Triângulo
    console.log("== Cálculo da Área do Triângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    console.log("Área do Triângulo: " + (base * altura).toFixed(2));
}
//retangulo, circulo e triangulo

function getFloatNumber(message) {
    return Number(prompt(message));
}

function calcularAreaQuadrado(lateral){
    let area = (lateral * lateral);
    console.log(`area do quadrado: ${area.toFixed(2)}`)
}

function calcularAreaCirculo(raio){
    let area = (3.14 * raio * raio);
    console.log(`area do circulo: ${area.toFixed(2)}`)
}

function calcularAreaTriangulo(base, altura){
    let area = (base * altura);
    console.log(`area do triangulo: ${area.toFixed(2)}`)
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    let area = ((baseMaior + baseMenor) * altura) / 2
    console.log("Área do Trapézio: " + area.toFixed(2));
    
}