//Entenda este código e tente realizar o desafio 1 (identificado como comentário).
//Neste desafio você deve criar uma função chamada arredondar2Casas e realizar o arredondamento do valor recebido como parametro e retornar o valor arredondado com duas casas. O valor retornado deve ser impresso no comando console.log da função main.
main()

function main() {
    let salarioMinimo
    let salarioFuncionario

    salarioMinimo = obterValorFracionario("Digite qual é o salário mínimo: ")
    salarioFuncionario = obterValorFracionario("Digite o salário do funcionário: ")
    let resultado = arredondarDuasCasas(salarioFuncionario,salarioMinimo)

    console.log("O funcionário recebe "+ resultado + " salários mínimos" ) // desafio 1

}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}

function arredondarDuasCasas(salarioFuncionario,salarioMinimo){
    let teste = (salarioFuncionario/salarioMinimo).toFixed(2)
    return teste
}