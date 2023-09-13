calculo()

function calculo () {
    let prestacao = Number(prompt("Qual o valor da prestação: "))
    let mesesEmAtraso = Number(prompt("Qual a qauntidade de meses em atraso: "))
    let juro = Number(prompt("Qual a taxa de juro que deseja aplicar: "))

    console.log(prestacao + (prestacao*(juro/100) * mesesEmAtraso))
}
