//for in only function in OBJETOS LITERIAS

// OBJETO SÃO {}
let cliente = {
    nome: "Guilherme",
    idade: 26,
    RG: 431768894,
    CPF: 41126708852,
    Estado: São Paulo-SP,
    status: ATIVO,
    plano: Premium

 };

for(let prop in cliente){
    
    console.log(cliente[prop])
}

// for of it's to arrays and strings

let dias =["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];

for(let valor of dias){
    console.log(valor)
}
