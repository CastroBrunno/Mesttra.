var prompt = require('prompt-sync')();

let senha = prompt("Digite seu senha ");
let contDigito = 0;
let contMai = 0;
let contMin = 0;
let contEspecial=0;

const alfabeto = "abcdefghijklmnopqrstuvwxyz"
const especiais = "!@#$%¨&*()+"
const maiscula = alfabeto.toUpperCase();

for(let i = 0; i<senha.length; i++){
    for(let j = 0; j<=9; j++){
        if(senha.charAt(i) == j){
            contDigito++
        }
    }
    for(let j = 0 ; j<maiscula.length; j++){
        if(senha.charAt(i)==maiscula.charAt(j)){
            contMai++
        }
        if(senha.charAt(i)==alfabeto.charAt(j)){
            contMin++
        }
    }
    for(let j = 0; j<especiais.length; j++){
        if(senha.charAt(i)==especiais.charAt(j)){
            contEspecial++
        }
        
    }    
    
}
let contVetor = 0;
let vetor = [contDigito, contMai, contMin, contEspecial];
for(let i = 0; i<vetor.length;i++){
    if(vetor[i]==0){
        contVetor++
    }
}

if(contVetor>2){
    console.log("senha inválida");
}
else{
    console.log("senha válida");
}