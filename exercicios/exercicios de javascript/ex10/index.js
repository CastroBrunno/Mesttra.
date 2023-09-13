//var anoInicial = Number(prompt("Digite o ano inicial: "));
//var anoFinal = Number(prompt("Digite o ano final: "));
var anoInicial = 2003;
var anoFinal = 2023;

var anos = anoFinal - anoInicial;
var meses = anos * 12;
var semanas = meses * 4;
var dias = semanas * 7;

console.log(`A idade desta pessoa em:`)
console.log(`Anos: ${anos}`)
console.log(`Meses: ${meses}`)
console.log(`Semanas: ${semanas}`)
console.log(`Dias: ${dias}`)