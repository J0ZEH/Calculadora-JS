function insert(num){
    var numero = document.getElementById('resultado').innerHTML; //obtem o resultado atual na tela e concatena com o número clicado
    document.getElementById('resultado').innerHTML = numero + num //mosta o numero digitado anteiormente ao lado do mais recente
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML; //a var resultado recebe o que está no parágrafo resultado
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1) //pega todos os caracteres do parágrafo 'resultado' e diminui um por um
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        //document.getElementById('resultado').innerHTML = eval(resultado);
        resultado = eval(resultado)
        if(Number.isInteger(resultado)){
            document.getElementById('resultado').innerHTML = resultado.toString().slice(0,12);
        } else{
            document.getElementById('resultado').innerHTML = resultado.toFixed(8).slice(0,12);
        }
    } else{
        document.getElementById('resultado').innerHTML = "";
    }
}
