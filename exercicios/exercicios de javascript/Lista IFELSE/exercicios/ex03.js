var prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Insira a primeira nota do aluno: "))
let nota2 = parseFloat(prompt("Insira a segunda nota do aluno: "))
let nota3 = parseFloat(prompt("Insira a terceira nota do aluno: "))

let resultado = (( (nota1 * 1) + (nota2 * 2) + (nota3 * 3) ) / 6).toFixed(2)

if ((nota1 == nota2) && (nota2 == nota3)) {
    console.log(`A nota ${nota1} é maior do que todas as notas`)
} else if (nota2 > nota1 && nota2 > nota3) {
    console.log(`A nota ${nota2} é maior do que todas as notas`)
} else if (nota3 > nota2 && nota3 > nota1) {
    console.log(`A nota ${nota3} é maior do que todas as notas`)
} else if(nota1 > nota2 && nota1 > nota3) {
    console.log(`A nota ${nota1} é maior do que todas as notas`)
}else if (nota1 == nota2 && nota2 != nota3) {
    console.log(`A primeira nota e a segunda nota são iguais: ${nota1}`)
}else if (nota1 == nota3 && nota3 != nota2){
    console.log(`A primeira nota e a terceira nota são iguais: ${nota1}`)
} else {
    console.log(`A segunda nota e a terceira nota são iguais: ${nota3}`)
}

console.log(`A nota ponderada do aluno é: ${resultado}`)
