function saudacao(nome){
    let menssagem = "Bom dia";

    function juntarNome(){
        return menssagem + ' ' + nome;
    }

    return juntarNome();

}

console.log(saudacao ("Guilherme"));