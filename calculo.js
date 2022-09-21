function insere(num){
    var numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;
}

function limpa() {
    document.getElementById("display").innerHTML = "";
}

function troca_sinal() {
    var display_atual = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = display_atual*(-1)
    
}

function calcula() {
    var resultado = document.getElementById("display").innerHTML;
    if(resultado) {
        document.getElementById("display").innerHTML = eval(resultado);
    } else {
        document.getElementById("display").innerHTML = "Nada...";
    }
}
