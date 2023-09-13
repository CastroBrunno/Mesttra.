var nota1, nota2, nota3
var resultado

nota1 = Number(prompt("Digite a nota 1: "))
nota2 = Number(prompt("Digite a nota 2: "))
nota3 = Number(prompt("Digite a nota 3: "))

resultado = ( (nota1 * 1) + (nota2 * 2) + (nota3 * 3) ) / 6

console.log(`A media ponderada do aluno é: ${resultado.toFixed(2)}`)