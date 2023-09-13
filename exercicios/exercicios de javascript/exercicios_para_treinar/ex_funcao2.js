main()

function main() {
    let distancia
    let kmPorLitro
    let valorLitro
    let velocidadeMedia
    
    distancia = getFloatNumber("Digite a distância a ser percorrida (km): ")
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ")
    kmPorLitro = getFloatNumber("Digite quantos km/l o veículo faz: ")
    valorLitro = getFloatNumber("Digite digite o valor do litro do combustível: ")
    
    converterHoras(distancia, velocidadeMedia)
    calcValorCombustivel(kmPorLitro, valorLitro)
    

}

function calcTempoViagem(distancia, velocidadeMedia){
    return (distancia / velocidadeMedia).toFixed(2);
}

function calcValorCombustivel(distancia, velocidadeMedia){
     console.log(`O gasto com combustível será de R$:${(distancia / velocidadeMedia).toFixed(2)}`)
}

// a funcao deve receber um valor de horas 
function converterHoras(distancia, velocidadeMedia){
    let teste = calcTempoViagem(distancia, velocidadeMedia)
    let horas = Math.floor(teste)
    let minutos = teste - horas
    Math.round(minutos = minutos * 60)
    console.log(`A viagem irá demorar: ${horas} horas e ${minutos} minutos` )
    
}

function getFloatNumber(message) {
    return Number(prompt(message));
}

   //a funcao deve retonar o seguinte resultado
    //exemplos: recebe parametro 10 devolve 10horas e 0minutos
    //          recebe parametro 10.52 devolve 10horas e 31minutos
    //          recebe parametro de 5.5 devolve 10 horas e 30minutos