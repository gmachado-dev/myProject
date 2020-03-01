function alarme1(){
    return "Hora de acordar são 7:00";

}

function alarme2(){
    return "Você tem mais 10 minutos";
}


setTimeout(function(){
    console.log(alarme1())
}, 3000)


console.log(alarme1())
console.log(alarme2())
