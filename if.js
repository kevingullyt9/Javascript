const prompt = require('prompt-sync')(
    {sigint: true}
)

console.log("===== Vou verificar se você é maior de idade =====")

var age = Number(prompt("Digite sua idade: "))

if (age < 0 ) {
    console.log("Valor desconhecido")
}else if (age == 17) {
    console.log("Falta um ano para ser maior de idade.")
}else if (age < 17){
    console.log("Menor de idade.")
}else {
    console.log("Maior de idade.")
}