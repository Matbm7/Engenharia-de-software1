Clínica:
console.log()
var prompt = require("prompt-sync")()

var pacientes = Number(prompt("Número de pacientes: "))

if (pacientes <= 5)
{
    console.log("Dentista A: " + pacientes + " pacientes.")
}
else
{
    var conta = pacientes / 2
    console.log("Dentista A: " + Math.floor(conta) + " pacientes.")
    console.log("Dentista B: " + Math.ceil(conta) + " pacientes.")
}
console.log()