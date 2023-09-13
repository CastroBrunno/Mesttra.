var salarioMin = prompt("Informe o valor do salario minimo atual: ");

var salarioFuncionario = prompt("Informe o valor do salario do funcionario: ");

var media = salarioFuncionario / salarioMin;

console.log(`O funcionario recebe ${media.toFixed(2)} salarios minimos`);