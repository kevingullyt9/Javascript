const prompt = require('prompt-sync')(
    {sigint: true}
)

console.log("===== Somar dois numeros =====")

var num1 = Number(prompt("Digite o primeiro numero: "))
var num2 = Number(prompt("Digite o segundo numero: "))

function calculate (arg1, arg2){
    var sum = arg1 + arg2;
    
    return sum;
}

var result = calculate(num1,num2);

console.log(`Resultado de ${num1} + ${num2} = ${result}`);