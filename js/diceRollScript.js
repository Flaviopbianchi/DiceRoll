var quantidadeDados = 1;

function atualizarQuantidadeDados() {
    var quantidadeDadosElemento = document.getElementById("quantidadeDados");
    quantidadeDadosElemento.innerHTML = quantidadeDados;
}

var menosDados = document.getElementById("menosDados");
function menos() {
    if (quantidadeDados > 1) {
        quantidadeDados--;
        atualizarQuantidadeDados();
    }
};

var addDados = document.getElementById("addDados");
function mais() {
    quantidadeDados++;
    atualizarQuantidadeDados();
};

function rolarDados() {
    var numeroLados = 6;
    var inputsRadioNumeroLados = document.getElementsByName("numeroLados");
    for (var i = 0; i < inputsRadioNumeroLados.length; i++) {
        if (inputsRadioNumeroLados[i].checked) {
            numeroLados = parseInt(inputsRadioNumeroLados[i].value);
            break;
        }
    }
    var menorValor = quantidadeDados;
    var maiorValor = quantidadeDados * numeroLados;
    var resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;

    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultado;

    return resultado;
}



