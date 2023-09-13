main()

function main() {
    let nota1
    let nota2
    let nota3
    let resultado

    nota1 = obterValorFracionario("Digite o valor da nota1: ")
    nota2 = obterValorFracionario("Digite o valor da nota2: ")
    nota3 = obterValorFracionario("Digite o valor da nota3: ")

    resultado = calculaMediaPonderada(nota1,nota2,nota3)  //ajustes aqui
    console.log(`A media ponderada das notas ${nota1}, ${nota2} e ${nota3} é: ${resultado}`) //ajustes aqui
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}

function calculaMediaPonderada(n1,n2,n3) {  //ajuste aqui a assinatura da função
    let peso1 = 1
    let peso2 = 2
    let peso3 = 3
    let somaPesos = (peso1 + peso2 + peso3)

    return (((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / somaPesos).toFixed(2)

}